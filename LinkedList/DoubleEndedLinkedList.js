"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleEndedLinkedList = void 0;
var Link_1 = require("./Link");
var DoubleEndedLinkedList = /** @class */ (function () {
    function DoubleEndedLinkedList() {
        this.last = null;
        this.first = null;
    }
    DoubleEndedLinkedList.prototype.isEmpty = function () {
        return !this.first;
    };
    DoubleEndedLinkedList.prototype.insertFirst = function (data) {
        var newLink = new Link_1.Link(data);
        if (this.isEmpty())
            this.last = newLink;
        newLink.next = this.first;
        this.first = newLink;
    };
    DoubleEndedLinkedList.prototype.insertLast = function (data) {
        var newLink = new Link_1.Link(data);
        if (this.isEmpty()) {
            this.first = newLink;
        }
        else {
            this.last ? this.last.next = newLink : null;
        }
        this.last = newLink;
    };
    DoubleEndedLinkedList.prototype.deleteFirst = function () {
        var _a;
        var temp = (_a = this.first) === null || _a === void 0 ? void 0 : _a.data;
        if (this.first) {
            if (this.first.next == null)
                this.last = null;
            this.first = this.first.next;
        }
        return temp ? temp : null;
    };
    DoubleEndedLinkedList.prototype.displayList = function () {
        var result = '[ ';
        var currentLink = this.first;
        while (currentLink) {
            result += "".concat(currentLink.data, " -> ");
            currentLink = currentLink.next;
        }
        result = result.slice(0, -3);
        result += ']';
        console.log(result);
    };
    return DoubleEndedLinkedList;
}());
exports.DoubleEndedLinkedList = DoubleEndedLinkedList;
// const linkedList = new DoubleEndedLinkedList<number>();
// linkedList.insertFirst(20);
// linkedList.insertFirst(34);
// linkedList.insertFirst(78)
// linkedList.insertFirst(12)
// linkedList.displayList()
// linkedList.deleteFirst()
// linkedList.insertFirst(200)
// linkedList.insertLast(405)
// linkedList.displayList()
