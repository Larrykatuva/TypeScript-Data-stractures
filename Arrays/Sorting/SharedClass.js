"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedClass = void 0;
var SharedClass = /** @class */ (function () {
    function SharedClass() {
        this.arr = [];
    }
    SharedClass.prototype.addItem = function (item) {
        this.arr.push(item);
    };
    SharedClass.prototype.swap = function (leftIndex, rightIndex) {
        var leftItem = this.arr[leftIndex];
        this.arr[leftIndex] = this.arr[rightIndex];
        this.arr[rightIndex] = leftItem;
    };
    return SharedClass;
}());
exports.SharedClass = SharedClass;
