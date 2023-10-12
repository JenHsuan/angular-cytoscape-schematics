"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewComponent = exports.setupCytoscapeProject = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
/*
 * 1. Add json files to assets folder
 * 2. Update angular.json
 * 3. Update package.json
 * 4. Update tsconfig.json
 * 5. Add base folder
 * 6. npm install
 */
function setupCytoscapeProject(_options) {
    return (tree, _context) => {
        const workspaceConfigBuffer = tree.read('angular.json');
        if (!workspaceConfigBuffer) {
            throw new schematics_1.SchematicsException('Not Angular CLI workspace');
        }
        const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
        const projectName = _options.project || workspaceConfig.defaultProject;
        const project = workspaceConfig.projects[projectName];
        if (project.projectType !== 'application') {
            throw new schematics_1.SchematicsException('Not Angular application');
        }
        //1. Add json files to assets folder
        let sourceTemplateForJson = (0, schematics_1.url)('./files/json');
        let sourceParameterizedTemplatesForJson = applyWithOverwrite(sourceTemplateForJson, [
            (0, schematics_1.template)(Object.assign(Object.assign({}, _options), core_1.strings)),
            (0, schematics_1.move)((0, core_1.normalize)(`${project.sourceRoot}/assets`))
        ]);
        //2. Update angular.json
        workspaceConfig.projects[projectName].architect.build.options['allowedCommonJsDependencies'] = [
            "cytoscape",
            "cytoscape-klay"
        ];
        tree.overwrite('./angular.json', JSON.stringify(workspaceConfig, null, 2));
        //3. Update package.json
        const dependencies = [
            { name: 'cytoscape', version: '^3.26.0' },
            { name: 'cytoscape-klay', version: '^3.1.4' },
            { name: 'cytoscape-popper', version: '^2.0.0' }
        ];
        dependencies.forEach(dependency => {
            addModulePackageJson(tree, dependency.name, dependency.version, false);
        });
        const devDependencies = [
            { name: "@types/cytoscape", version: "^3.19.11" },
            { name: "@types/cytoscape-popper", version: "^2.0.1" }
        ];
        devDependencies.forEach(dependency => {
            addModulePackageJson(tree, dependency.name, dependency.version, true);
        });
        //4. Update tsconfig.json
        const tsconfigConfigBuffer = tree.read('tsconfig.json');
        if (!tsconfigConfigBuffer) {
            throw new schematics_1.SchematicsException('Not Angular CLI workspace');
        }
        if (!isJsonString(tsconfigConfigBuffer.toString())) {
            let list = tsconfigConfigBuffer.toString().split('*/');
            const tsconfigConfig = JSON.parse(list[1]);
            tsconfigConfig.compilerOptions = Object.assign(tsconfigConfig.compilerOptions, {
                resolveJsonModule: true,
                esModuleInterop: true,
                noImplicitAny: false,
                strictPropertyInitialization: false
            });
            tree.overwrite('./tsconfig.json', list[0] + '*/\r\n' + JSON.stringify(tsconfigConfig, null, 2));
        }
        else {
            const tsconfigConfig = JSON.parse(tsconfigConfigBuffer.toString());
            tsconfigConfig.compilerOptions = Object.assign(tsconfigConfig.compilerOptions, {
                resolveJsonModule: true,
                esModuleInterop: true,
                noImplicitAny: false,
                strictPropertyInitialization: false
            });
            tree.overwrite('./tsconfig.json', JSON.stringify(tsconfigConfig, null, 2));
        }
        //5. Add base folder
        let sourceTemplateForSetup = (0, schematics_1.url)('./files/setup');
        let sourceParameterizedTemplatesForSetup = applyWithOverwrite(sourceTemplateForSetup, [
            (0, schematics_1.template)(Object.assign(Object.assign({}, _options), core_1.strings)),
            (0, schematics_1.move)((0, core_1.normalize)(`${project.sourceRoot}/app`))
        ]);
        //6. npm install
        const packageConfigBuffer = tree.read('package.json');
        if (!packageConfigBuffer) {
            throw new schematics_1.SchematicsException('Not Angular CLI workspace');
        }
        const packageConfig = JSON.parse(packageConfigBuffer.toString());
        _context.addTask(new tasks_1.NodePackageInstallTask({
            packageName: Object.keys(packageConfig.dependencies).join(' ') + ' ' + Object.keys(packageConfig.devDependencies).join(' ')
        }));
        return (0, schematics_1.chain)([sourceParameterizedTemplatesForJson, sourceParameterizedTemplatesForSetup]); // merge the template into tree
    };
}
exports.setupCytoscapeProject = setupCytoscapeProject;
/*
 * Add new folder with the specific name
 */
function createNewComponent(_options) {
    return (tree, _context) => {
        return tree;
    };
}
exports.createNewComponent = createNewComponent;
function addModulePackageJson(host, pkg, version, isDev = false) {
    if (host.exists('package.json')) {
        let type = isDev ? 'devDependencies' : 'dependencies';
        const sourceText = host.read('package.json').toString('utf-8');
        const json = JSON.parse(sourceText);
        if (!json[type]) {
            json[type] = {};
        }
        if (!json[type][pkg]) {
            json[type][pkg] = version;
            json[type] = sortObjectByKeys(json[type]);
        }
        host.overwrite('package.json', JSON.stringify(json, null, 2));
    }
    return host;
}
function sortObjectByKeys(obj) {
    return Object.keys(obj).sort().reduce((result, key) => (result[key] = obj[key]) && result, {});
}
function applyWithOverwrite(source, rules) {
    return (tree, _context) => {
        const rule = (0, schematics_1.mergeWith)((0, schematics_1.apply)(source, [
            ...rules,
            (0, schematics_1.forEach)((fileEntry) => {
                if (tree.exists(fileEntry.path)) {
                    tree.overwrite(fileEntry.path, fileEntry.content);
                    return null;
                }
                return fileEntry;
            })
        ]));
        return rule(tree, _context);
    };
}
function isJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
//# sourceMappingURL=index.js.map