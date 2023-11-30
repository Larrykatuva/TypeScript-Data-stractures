"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleEndedLinkedList_1 = require("./DoubleEndedLinkedList");
var LinkStack = /** @class */ (function () {
    function LinkStack() {
        this.linkedList = new DoubleEndedLinkedList_1.DoubleEndedLinkedList();
    }
    LinkStack.prototype.isEmpty = function () {
        return this.linkedList.isEmpty();
    };
    LinkStack.prototype.pop = function () {
        return this.linkedList.deleteFirst();
    };
    LinkStack.prototype.insert = function (value) {
        this.linkedList.insertLast(value);
    };
    LinkStack.prototype.peek = function () {
        var _a, _b;
        return ((_a = this.linkedList.first) === null || _a === void 0 ? void 0 : _a.data) ? (_b = this.linkedList.first) === null || _b === void 0 ? void 0 : _b.data : null;
    };
    LinkStack.prototype.printStack = function () {
        this.linkedList.displayList();
    };
    return LinkStack;
}());
var stack = new LinkStack();
stack.insert(45);
stack.insert(9);
stack.insert(30);
stack.insert(11);
stack.insert(31);
stack.insert(94);
stack.printStack();
stack.pop();
stack.printStack();
