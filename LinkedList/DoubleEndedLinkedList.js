"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        if (this.first) {
            if (this.first.next == null) {
                this.last = null;
            }
            this.first.next = this.first;
        }
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
var linkedList = new DoubleEndedLinkedList();
linkedList.insertFirst(20);
linkedList.insertFirst(34);
linkedList.insertFirst(78);
linkedList.insertFirst(12);
linkedList.displayList();
// linkedList.deleteFirst()
linkedList.insertFirst(200);
linkedList.insertLast(405);
linkedList.displayList();
