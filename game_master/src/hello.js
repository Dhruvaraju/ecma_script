import {Environment} from "./environment";

const DEFAULT_LINE = "Start your your path here: ";
const LINE_BREAK = "</br>";
const print = (...args) => (console.log(args[0]+" : "+args[1]));

var options = {
    _intro: "You can Type ",
    _options: ["left","right","up","down"],
    outputOptions(){
        this._options.forEach(element => {
            addToOutput(this._intro+" "+ element)
        });
    }
}

var environment = new Environment("Forest: ");
var treasures = new WeakMap();
var treasureCoords = new Set();

function main() {
    console.log("Initiated");
    var enterEl = document.querySelector("#enter");
    enterEl.addEventListener("click",onClickEnter,false);
    addToOutput();

    var loc1 = {x:2,y:2};
    treasureCoords.add(loc1);
    var loc2 = {x:2, y:0};
    treasureCoords.add(loc2);

    treasures.set(loc1,{name:"Treasure Chest", value:100});
    treasures.set(loc2,{name:"Medallion",value:"10"});
}

var x=0 ; var y = 0;
function navigate(stepX, stepY){
    x+= stepX;
    y+= stepY;

    let coordinates = document.querySelector("#coordinates");
    coordinates.innerHTML = x +","+ y;

    findTreasure()
}

function addToOutput(newline = DEFAULT_LINE) {
    var output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + LINE_BREAK+ newline; 
    var commands = document.querySelector("#commands");
    commands.value = "";
}

function onClickEnter() {
    var commands = document.querySelector("#commands");
    if(commands.value == "help"){
        addToOutput(options.outputOptions());
    }else if(commands.value == "left"){
        navigate(-1,0);
        addToOutput(environment.stumbleUpon());
    }else if(commands.value == "right"){
        navigate(1,0);
        addToOutput(environment.stumbleUpon());
    }else if(commands.value == "up"){
        navigate(0,-1);
        addToOutput(environment.stumbleUpon());
    }else if(commands.value == "down"){
        navigate(0,1);
        addToOutput(environment.stumbleUpon());
    }else{
        addToOutput(commands.value);  
    }     
}

function findTreasure(){
    let coords;
    for(let coo of treasureCoords){
        if(coo.x == x, coo.y == y){
            coords =coo;
        }
    }

    if(coords){
        var value= treasures.get(coords);
        if(value){
            addToOutput("you found : "+ value.name);
        }
    }
}


main();