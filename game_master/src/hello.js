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

function main() {
    console.log("Initiated");
    var enterEl = document.querySelector("#enter");
    enterEl.addEventListener("click",onClickEnter,false);
    addToOutput();
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
        options.outputOptions();
    }else{
        addToOutput(commands.value);  
    }     
}


main();