"use strict";

var _environment = require("./environment");

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

var environment = new _environment.Environment("Forest: ");
var treasures = new WeakMap();
var treasureCoords = new Set();

function main() {
    console.log("Initiated");
    var enterEl = document.querySelector("#enter");
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();

    var loc1 = { x: 2, y: 2 };
    treasureCoords.add(loc1);
    var loc2 = { x: 2, y: 0 };
    treasureCoords.add(loc2);

    treasures.set(loc1, { name: "Treasure Chest", value: 100 });
    treasures.set(loc2, { name: "Medallion", value: "10" });
}

var x = 0;var y = 0;
function navigate(stepX, stepY) {
    x += stepX;
    y += stepY;

    var coordinates = document.querySelector("#coordinates");
    coordinates.innerHTML = x + "," + y;

    findTreasure();
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
        addToOutput(options.outputOptions());
    } else if (commands.value == "left") {
        navigate(-1, 0);
        addToOutput(environment.stumbleUpon());
    } else if (commands.value == "right") {
        navigate(1, 0);
        addToOutput(environment.stumbleUpon());
    } else if (commands.value == "up") {
        navigate(0, -1);
        addToOutput(environment.stumbleUpon());
    } else if (commands.value == "down") {
        navigate(0, 1);
        addToOutput(environment.stumbleUpon());
    } else {
        addToOutput(commands.value);
    }
}

function findTreasure() {
    var coords = void 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = treasureCoords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var coo = _step.value;

            if (coo.x == x, coo.y == y) {
                coords = coo;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (coords) {
        var value = treasures.get(coords);
        if (value) {
            addToOutput("you found : " + value.name);
        }
    }
}

main();
//# sourceMappingURL=hello.js.map