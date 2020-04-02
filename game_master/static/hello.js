(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generate = generate;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Encounter = exports.Encounter = function () {
    function Encounter() {
        var introText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        _classCallCheck(this, Encounter);

        this.introText = introText;
    }

    _createClass(Encounter, [{
        key: "whenEncounter",
        value: function whenEncounter() {
            return this.introText;
        }
    }]);

    return Encounter;
}();

var Bear = exports.Bear = function (_Encounter) {
    _inherits(Bear, _Encounter);

    function Bear() {
        _classCallCheck(this, Bear);

        return _possibleConstructorReturn(this, (Bear.__proto__ || Object.getPrototypeOf(Bear)).call(this, "grr... growling you have encountered a bear."));
    }

    return Bear;
}(Encounter);

var Angel = exports.Angel = function (_Encounter2) {
    _inherits(Angel, _Encounter2);

    function Angel() {
        _classCallCheck(this, Angel);

        return _possibleConstructorReturn(this, (Angel.__proto__ || Object.getPrototypeOf(Angel)).call(this, "Wow!, you encountered an angel it is provide you strength and healing 80%"));
    }

    return Angel;
}(Encounter);

var Ghost = exports.Ghost = function (_Encounter3) {
    _inherits(Ghost, _Encounter3);

    function Ghost() {
        _classCallCheck(this, Ghost);

        return _possibleConstructorReturn(this, (Ghost.__proto__ || Object.getPrototypeOf(Ghost)).call(this, "Boo!.. you encountered a ghost"));
    }

    return Ghost;
}(Encounter);

function generate() {
    var number01 = Math.random();
    console.log("Random Number is" + number01);
    var number = Math.floor(number01 * 3 + 1);

    if (number == 1) {
        console.log("Bear is returned");
        return new Bear();
    } else if (number == 2) {
        console.log("Ghost is returned");
        return new Ghost();
    } else if (number == 3) {
        console.log("Angel is returned");
        return new Angel();
    } else {
        console.log("Nothing is returned");
        return new Encounter("Nothing Continue");
    }
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Environment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encounter = require("./encounter");

var enc = _interopRequireWildcard(_encounter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = exports.Environment = function () {
    function Environment(name) {
        _classCallCheck(this, Environment);

        this.name = name;
        this.encounter = enc.generate();
    }

    _createClass(Environment, [{
        key: "stumbleUpon",
        value: function stumbleUpon() {
            this.encounter = enc.generate();
            var interaction = this.name + "you just stumbled upon ..." + this.encounter.whenEncounter();
            return interaction;
        }
    }]);

    return Environment;
}();

},{"./encounter":1}],3:[function(require,module,exports){
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

},{"./environment":2}]},{},[3]);
