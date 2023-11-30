"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var Reverser = /** @class */ (function () {
    function Reverser(word) {
        this.input = word;
        this.stack = new Stack_1.Stack(this.input.length);
        this.output = '';
    }
    Reverser.prototype.pushCharacters = function () {
        for (var i = 0; i < this.input.length; i++) {
            this.stack.push(this.input.charAt(i));
        }
    };
    Reverser.prototype.reverse = function () {
        this.pushCharacters();
        while (!this.stack.isEmpty()) {
            this.output += this.stack.pop();
        }
        return this.output;
    };
    return Reverser;
}());
console.log('\n\n********************************');
var reverser = new Reverser('Katuva Muvaka Lawrence');
console.log(reverser.reverse());
