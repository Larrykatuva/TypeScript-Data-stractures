"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var Link = /** @class */ (function () {
    function Link(data) {
        this.data = data;
    }
    Link.prototype.displayData = function () {
        console.log("Data =>", this.data);
    };
    return Link;
}());
exports.Link = Link;
