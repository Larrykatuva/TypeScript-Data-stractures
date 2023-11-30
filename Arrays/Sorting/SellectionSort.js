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
var SharedClass_1 = require("./SharedClass");
var SelectionSort = /** @class */ (function (_super) {
    __extends(SelectionSort, _super);
    function SelectionSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionSort.prototype.sort = function () {
        for (this.out = 0; this.out < this.arr.length - 1; this.out++) {
            this.min = this.out;
            for (this.in = this.out + 1; this.in < this.arr.length; this.in++) {
                if (this.arr[this.in] < this.arr[this.min])
                    this.min = this.in;
            }
            this.swap(this.out, this.min);
        }
    };
    return SelectionSort;
}(SharedClass_1.SharedClass));
var selectionSort = new SelectionSort();
selectionSort.addItem(5);
selectionSort.addItem(11);
selectionSort.addItem(45);
selectionSort.addItem(90);
selectionSort.addItem(3);
selectionSort.addItem(65);
console.log(selectionSort.arr);
selectionSort.sort();
console.log(selectionSort.arr);
