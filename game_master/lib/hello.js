"use strict";

var DEFAULT_LINE = "Start your your path here: ";
var LINE_BREAK = "</br>";
var print = function print() {
    return console.log((arguments.length <= 0 ? undefined : arguments[0]) + " : " + (arguments.length <= 1 ? undefined : arguments[1]));
};

var options = {
    _intro: "You can Type ",
    _options: ["left", "right", "up", "down"],
    outputOptions: function outputOptions() {
        var _this = this;

        this._options.forEach(function (element) {
            addToOutput(_this._intro + " " + element);
        });
    }
};

function main() {
    console.log("Initiated");
    var enterEl = document.querySelector("#enter");
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();
}

function addToOutput() {
    var newline = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_LINE;

    var output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + LINE_BREAK + newline;
    var commands = document.querySelector("#commands");
    commands.value = "";
}

function onClickEnter() {
    var commands = document.querySelector("#commands");
    if (commands.value == "help") {
        options.outputOptions();
    } else {
        addToOutput(commands.value);
    }
}

main();
//# sourceMappingURL=hello.js.map