# ecma_script

## ECMA International
- An organization which governs the standards to be followed by few programming languages like javascript, action script and google dart.
- Goal of the organization is to deliver standards year over year,so the browsers can support it.

## Setting up environment to use ECMA6
- Install Node js, create a new folder and initiate a project.
- use npm init to initiate a project 
- install babel command line tools to project locally by using command ``` npm install --save-dev babel-cli ```
- **-dev** will make babel cli as dev dependency.
> Babel is a javascript compiler which is used to compile next generation javascript now.

## Transpiler 
- Converting source to source, or converting a newer version of javascript to a current version of javascript that a browser understands, like converting ES6 to current Javascript.
- Typescript coffee script, google dart or some of the transpilers.

- Updating the current project to have a build step.
- package.json file under scripts json remove test and add build as mentioned below
```
"build": "babel src -d lib"
```
- to run the build script create src folder and add a js file to console log a text.
- To initiate a build run the command ``` npm run build ```
- Babel js has a plugin system to configure the ecma script version using which the build need to be done.
- Run the following command in your application folder ``` npm install babel-preset-es2015 --save-dev ```
- Create a configuration file called as **.babelrc** to define the properties for build here we will mention the preset.
- babeljs supports many build tools such as gulp, webpack and many more the configuration will be present in the babeljs.io

## Browser support
- Browsers with auto update capability are called **evergreen browsers**, Example firefox, safari, opera, internet explorer, edge.
- Browsers can support in 3 ways:
    - **Native support** feature is built in and readily available to use.
    - **Transpiling** Transforms code to a native support code.
    - **Polyfilling** additional file that is used to support the features that are not supported  currently.

- caniuse.com will provide the list of features that are supported by a browser is listed here.
- browserling is a website which is an online tool helps you to run the app in multiple os and browsers.
- ESMA script compatibility tables are also available online.

## ES6 Basics:
### Setting up application:
- Any webapp has an entry point or home page create an initial page called as index.html

#### Default Value how to set it?
- We can add default values to functions created and call the function without any parameter as below
```javascript
function addToOutput(newline = "Start your your path here: ") {
    var output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + "</br>" + newline; 
    var commands = document.querySelector("#commands");
    commands.value = "";
}
```
- Invoke this script with out any parameters and the default value will be taken. generally we will invoke this in the initial scripts.

#### var, Let, Const
- We can declare a variable in 3 ways in ecma script var, let and const
- **var** is generally used for declaring variables in javascript.
- **let** is can be used to do the same but it is scoped. Like var the value of the variable can be assigned again.
- **const** is used for constants where value can only be assigned once.

#### Arrow function
- Used for simplification of a function and write it with minimum code
```javascript
function (a) {
    return a*2;
}

//We can write it as below
a => (return a*2);

//Most simplified form
a=> a*2;
```
- To debug ecma script code in browser add ``` --source-maps ``` at the end of the build script in the package.json
```javascript
  "scripts": {
    "build": "babel src -d lib --source-maps"
  }   
```

## Class
- Can be defined by using the keyword **class**, contains functions and variables.
- no need to mention function keywords while defining methods.
- a function named constructor can be created with inputs which will be accessible to entire class.
```javascript
//Defining class environment
class Environment{
  //Defining constructor
    constructor(name){
      //Variable Values
        this.name = name;
        this.encounter = new Bear();
    }
    //Defining a function
    stumbleUpon(){
        var interaction = this.name + "you just stumbled upon ..." + this.encounter.whenEncounter();
        return interaction;
    }
}

```

## Module
- A file which is used to support a functionality, generally similar functionalities are grouped as a module.
- export keyword is used to create a module and import keyword is used to use a module. Example for module is given below.
```javascript
export class Bear{
    whenEncounter(){
        return "grr growl...., you have encountered a bear";
    }
}

```
- Importing can be done using the import keyword example below
```javascript
import {Bear} from "./encounter";

export class Environment{
    constructor(name){
        this.name = name;
        this.encounter = new Bear();
    }
    
    stumbleUpon(){
        var interaction = this.name + "you just stumbled upon ..." + this.encounter.whenEncounter();
        return interaction;
    }
}

```
- Splitting code in to module will provide better reusability and readability but browser cannot understand multiple modules.
- To combine all scripts we need a tool called as **browserify** which will combine all the scripts as a single script.
- to install browserify use command ``` npm install browserify --save-dev ```
- package.json need to be updated to have a build step to combine browserify and babel compilation.
```javascript
"scripts": {
    "bundle-js":"browserify lib/hello.js > static/hello.js",
    "build-js": "babel src -d lib --source-maps",
    "build":"npm run build-js && npm run bundle-js"
  }

```
> We can combine multiple build steps in package.json

## Inheritance
- Inheritance can be used by keyword **extends** when a call extends other class it can display same behavior.
- The constructor of the extended class can be invoked by calling the keyword super.
- Always keep the super method at the start of code.
```javascript

export class Encounter{
    constructor(introText=""){
        this.introText = introText;
    }
    whenEncounter(){
        return this.introText;
    }
}


export class Bear extends Encounter{
    constructor(){
        super("grr... growling you have encountered a bear.");
    }
}

export class Angel extends Encounter{
    constructor(){
        super("Wow!, you encountered an angel it is provide you strength and healing 80%");
    }
}

export class Ghost extends Encounter{
    constructor(){
        super("Boo!.. you encountered a ghost");
    }
}

```
- Above mentioned example angel, bear and ghost inheriting properties of encounter
- to import all the classes from this you can use ``` import * as abc from "filelocation"; ``` like ``` import * as abc from "./encounter" ```
## Collection types
- Map is used to store key value pairs
- Set will allow list of values but not duplicates.
- Weakmap  is like map but will have a key as object type and value will be arbitrarily assigned. They keys will be of only type object.
- weakset lets you hold weakly held Objects in a collection. In our example here the Object that we want to add to our WeakSet has no reference so it will not be held in the Set
```javascript
//Map
var testMap = new Map();
testMap.set(s,234);
console.log(testMap.get(s))// will log 234

//Set
var testSet = new Set();
testSet.add("SomeText");

//WeakMap
var testWeakMap = new WeakMap();
testWeakMap.set{"sss",{extra:42}}
var objRef = new Object();
testWeakMap.set(objRef,{extra:42});

//WeakSet
var testWeakSet = new WeakSet();
testWeakSet.add({data:42});

```

