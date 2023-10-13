# angular-cytoscape-schematics
An Angular schematics command to setup the Cytoscape for the empty Angular project automatically.

![demo](https://raw.githubusercontent.com/JenHsuan/angular-cytoscape-schematics/master/demo/screen-shot.png?token=GHSAT0AAAAAACHIZXE3NAIJ4TITJV7IH64AZIAOLUA)

## Compatability
* Angular ~13.0.3
* typescript ~4.4.2

## Usage
### 1. Create a new Angular application
```
ng new my-app
```

### 2. Install Angular schematics-cli
```
npm install -g @angular/cli
```

### 3. Create an empty Angular project
* Choose adding the `routing module`, 
* Choose using `SCSS`

```
ng new my-app
```

### 4. Run the following schematics in an Empty Angular project 

```
cd my-app
ng add angular-cytoscape-schematics
```

### 5. Execute the application
```
npm start
```

### 6. Open the browser and visit the following URL.
* `http://localhost:4200`
* `http://localhost:4200/workflow`

# References
* [How to Customize Angular Schematics to Reduce Manual Efforts?](https://medium.com/a-layman/how-to-customize-angular-schematics-to-reduce-manual-efforts-40bcca1eb61d)