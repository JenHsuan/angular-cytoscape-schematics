# angular-cytoscape-schematics
An Angular schematics command to setup the Cytoscape for the empty Angular project automatically.

![demo](https://raw.githubusercontent.com/JenHsuan/angular-cytoscape-schematics/master/demo/screen-shot.png?token=GHSAT0AAAAAACHIZXE3NAIJ4TITJV7IH64AZIAOLUA)

## Compatability
* Angular 13

## Usage
1. Create a new Angular application
```
ng new my-app
```

2. Install Angular schematics-cli
```
npm install -g @angular-devkit/schematics-cli
```

3. Install this package
```
npm install --save angular-cytoscape-schematics
```

4. Run the following schematics in an Empty Angular project
```
cd my-app
schematics angular-cytoscape-schematics:angular-cytoscape-schematics --deb
ug=false
```

5. Execute the application
```
npm start
```

# References
* [Quick Guide to Angular Schematics: How I Built My First Schematic](https://stefaniefluin.medium.com/quick-guide-to-angular-schematics-how-i-built-my-first-schematic-2c81a486dd3a)