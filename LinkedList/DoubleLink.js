"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleLink = void 0;
var DoubleLink = /** @class */ (function () {
    function DoubleLink(data) {
        this.data = data;
    }
    DoubleLink.prototype.displayData = function () {
        console.log("Data =>", this.data);
    };
    return DoubleLink;
}());
exports.DoubleLink = DoubleLink;
