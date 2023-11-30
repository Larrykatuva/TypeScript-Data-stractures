"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./Queue");
var PriorityQueue = /** @class */ (function (_super) {
    __extends(PriorityQueue, _super);
    function PriorityQueue(size) {
        return _super.call(this, size) || this;
    }
    PriorityQueue.prototype.insert = function (value) {
        if (this.nItems == 0) {
            this.queArray[++this.rear] = value;
        }
        else {
            var i = 0;
            for (i = this.nItems - 1; i >= 0; i--) {
                if (this.queArray[i] > value) {
                    this.queArray[i + 1] = this.queArray[i];
                    this.rear++;
                }
                else {
                    break;
                }
            }
            this.queArray[i + 1] = value;
        }
        this.nItems++;
    };
    return PriorityQueue;
}(Queue_1.Queue));
console.log('****************************');
var priorityQueue = new PriorityQueue(5);
priorityQueue.insert(3);
priorityQueue.insert(40);
priorityQueue.insert(1);
priorityQueue.insert(78);
priorityQueue.insert(54);
console.log(priorityQueue.queArray);
