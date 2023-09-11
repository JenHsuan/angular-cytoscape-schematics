import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

/*
 * 1. Add json files to assets folder
 * 2. Update angular.json
 * 3. Update package.json
 * 4. Add base folder
 */
export function setupCytoscapeProject(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}

/*
 * 1. Add new folder with the specific name
 * 2. Update angular.json
 * 3. Update package.json
 */
export function createNewComponent(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}
