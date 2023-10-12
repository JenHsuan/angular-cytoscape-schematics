import { normalize, strings } from '@angular-devkit/core';
import { Rule, SchematicContext, SchematicsException, Source, Tree, apply, chain, forEach, mergeWith, move, template, url } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Schema } from './schema';

/*
 * 1. Add json files to assets folder
 * 2. Update angular.json
 * 3. Update package.json
 * 4. Update tsconfig.json
 * 5. Add base folder
 * 6. npm install
 */
export function setupCytoscapeProject(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read('angular.json');
    if (!workspaceConfigBuffer) {
      throw new SchematicsException('Not Angular CLI workspace');
    }

    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    const projectName = _options.project || workspaceConfig.defaultProject;
    const project = workspaceConfig.projects[projectName];
    if (project.projectType !== 'application' ) {
      throw new SchematicsException('Not Angular application');
    }

    //1. Add json files to assets folder
    let sourceTemplateForJson = url('./files/json');
    let sourceParameterizedTemplatesForJson = applyWithOverwrite(sourceTemplateForJson, [
      template({
        ..._options,
        ...strings,
      }),
      move(normalize(`${project.sourceRoot}/assets`))
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
      addModulePackageJson(
        tree,
        dependency.name,
        dependency.version,
        false
      );
    });

    const devDependencies = [
      { name: "@types/cytoscape", version: "^3.19.11" },
      { name: "@types/cytoscape-popper", version: "^2.0.1" }
    ];
    devDependencies.forEach(dependency => {
      addModulePackageJson(
        tree,
        dependency.name,
        dependency.version,
        true
      );
    });

    //4. Update tsconfig.json
    const tsconfigConfigBuffer = tree.read('tsconfig.json');
    if (!tsconfigConfigBuffer) {
      throw new SchematicsException('Not Angular CLI workspace');
    }

    if (!isJsonString(tsconfigConfigBuffer!.toString())) {
      let list = tsconfigConfigBuffer!.toString().split('*/');
      const tsconfigConfig = JSON.parse(list[1]);
      tsconfigConfig.compilerOptions = Object.assign(tsconfigConfig.compilerOptions, {
        resolveJsonModule: true,
        esModuleInterop: true,
        noImplicitAny: false,
        strictPropertyInitialization: false
      });
  
      tree.overwrite('./tsconfig.json', list[0] + '*/\r\n' + JSON.stringify(tsconfigConfig, null, 2));   
    } else {
      const tsconfigConfig = JSON.parse(tsconfigConfigBuffer!.toString());
      tsconfigConfig.compilerOptions = Object.assign(tsconfigConfig.compilerOptions, {
        resolveJsonModule: true,
        esModuleInterop: true,
        noImplicitAny: false,
        strictPropertyInitialization: false
      });
  
      tree.overwrite('./tsconfig.json', JSON.stringify(tsconfigConfig, null, 2));   
    }
    //5. Add base folder
    let sourceTemplateForSetup = url('./files/setup');
    let sourceParameterizedTemplatesForSetup = applyWithOverwrite(sourceTemplateForSetup, [
      template({
        ..._options,
        ...strings,
      }),
      move(normalize(`${project.sourceRoot}/app`))
    ]);

    //6. npm install
    const packageConfigBuffer = tree.read('package.json');
    if (!packageConfigBuffer) {
      throw new SchematicsException('Not Angular CLI workspace');
    }

    const packageConfig = JSON.parse(packageConfigBuffer.toString());
    _context.addTask(
      new NodePackageInstallTask({
        packageName: Object.keys(packageConfig.dependencies).join(' ') + ' ' + Object.keys(packageConfig.devDependencies).join(' ')
      })
    );

    return chain([sourceParameterizedTemplatesForJson, sourceParameterizedTemplatesForSetup]); // merge the template into tree

  };
}

/*
 * Add new folder with the specific name
 */
export function createNewComponent(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}

function addModulePackageJson(host: Tree, pkg: string, version: string, isDev = false): Tree {
  if (host.exists('package.json')) {
    let type = isDev ? 'devDependencies' : 'dependencies';

    const sourceText = host.read('package.json')!.toString('utf-8');
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

function sortObjectByKeys(obj: any) {
  return Object.keys(obj).sort().reduce((result, key) => (result[key] = obj[key]) && result, {} as any);
}

function applyWithOverwrite(source: Source, rules: Rule[]): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const rule = mergeWith(
      apply(source, [
        ...rules,
        forEach((fileEntry) => {
          if (tree.exists(fileEntry.path)) {
            tree.overwrite(fileEntry.path, fileEntry.content);
            return null;
          }
          return fileEntry;
        })
      ]),
    );

    return rule(tree, _context);
  };
}

function isJsonString(str: string) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}