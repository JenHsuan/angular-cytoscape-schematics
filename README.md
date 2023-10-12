# angular-cytoscape-schematics
An Angular schematics command to setup the Cytoscape for the empty Angular project automatically.

![demo](https://raw.githubusercontent.com/JenHsuan/angular-cytoscape-schematics/master/demo/screen-shot.png?token=GHSAT0AAAAAACHIZXE3NAIJ4TITJV7IH64AZIAOLUA)

## Compatability
* Angular ~13.0.3
* typescript ~4.4.2

## Usage
1. Create a new Angular application
```
ng new my-app
```

2. Install Angular schematics-cli
```
npm install -g @angular/cli
```

3. Run the following schematics in an Empty Angular project
```
cd my-app
ng add angular-cytoscape-schematics
```

4. Execute the application
```
npm start
```

5. Open the browser and visit http://localhost:4200

# References
* [How to Customize Angular Schematics to Reduce Manual Efforts?](https://medium.com/a-layman/how-to-customize-angular-schematics-to-reduce-manual-efforts-40bcca1eb61d)