"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleLink_1 = require("./DoubleLink");
var DoubleLinkedList = /** @class */ (function () {
    function DoubleLinkedList() {
        this.first = null;
    }
    DoubleLinkedList.prototype.isEmpty = function () {
        return !this.first;
    };
    DoubleLinkedList.prototype.findLink = function (value) {
        var currentLink = this.first;
        while (currentLink) {
            if (currentLink.data == value) {
                return true;
            }
            else {
                currentLink = currentLink.next;
            }
        }
        return false;
    };
    DoubleLinkedList.prototype.insertFirst = function (value) {
        var newLink = new DoubleLink_1.DoubleLink(value);
        newLink.next = this.first;
        this.first = newLink;
    };
    DoubleLinkedList.prototype.displayList = function () {
        var currentLink = this.first;
        var result = '[ ';
        while (currentLink) {
            result += "".concat(currentLink.data, " -> ");
            currentLink = currentLink.next;
        }
        result = result.slice(0, -3);
        result += ']';
        console.log(result);
    };
    DoubleLinkedList.prototype.deleteFirst = function () {
        var _a;
        this.first = (_a = this.first) === null || _a === void 0 ? void 0 : _a.next;
        this.first ? this.first.previous = null : null;
    };
    return DoubleLinkedList;
}());
console.log('************************************');
var linkedList = new DoubleLinkedList();
linkedList.insertFirst(20);
linkedList.insertFirst(34);
linkedList.insertFirst(78);
linkedList.insertFirst(12);
linkedList.displayList();
linkedList.deleteFirst();
linkedList.insertFirst(200);
linkedList.displayList();
console.log('Is 204 found => ', linkedList.findLink(204));
console.log('Is 20 found => ', linkedList.findLink(20));
