"use strict";
/**
 * Both swaps and comparisons are proportional to N 2 . Because constants don’t count
in Big O notation, we can ignore the 2 and the 4 and say that the bubble sort runs in
O(N 2 ) time. This is slow, as you can verify by running the BubbleSort Workshop
applet with 100 bars
 */
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
var SharedClass_1 = require("./SharedClass");
var BubbleSort = /** @class */ (function (_super) {
    __extends(BubbleSort, _super);
    function BubbleSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubbleSort.prototype.sort = function () {
        for (var i = this.arr.length - 1; i > 1; i--) {
            for (var j = 0; j < i; j++) {
                if (this.arr[j] > this.arr[j + 1])
                    this.swap(j, j + 1);
            }
        }
    };
    return BubbleSort;
}(SharedClass_1.SharedClass));
var bubbleSort = new BubbleSort();
bubbleSort.addItem(3);
bubbleSort.addItem(34);
bubbleSort.addItem(2);
bubbleSort.addItem(22);
bubbleSort.addItem(17);
bubbleSort.addItem(8);
console.log(bubbleSort.arr);
bubbleSort.sort();
console.log(bubbleSort.arr);
