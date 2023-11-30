"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.maxSize = size;
        this.stackArray = new Array(size);
        this.top = -1;
    }
    Stack.prototype.push = function (value) {
        this.stackArray[++this.top] = value;
    };
    Stack.prototype.pop = function () {
        return this.stackArray[this.top--];
    };
    Stack.prototype.peek = function () {
        return this.stackArray[this.top];
    };
    Stack.prototype.isEmpty = function () {
        return this.top === -1;
    };
    Stack.prototype.isFull = function () {
        return this.top === this.stackArray.length;
    };
    return Stack;
}());
exports.Stack = Stack;
