"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var DelimiterMatching = /** @class */ (function () {
    function DelimiterMatching(expression) {
        this.preservedDelimiters = ['{', '}', '(', ')', '[', ']'];
        this.delimiters = [['{', '}'], ['(', ')'], ['[', ']']];
        this.input = expression;
        this.stack = new Stack_1.Stack(this.input.length);
    }
    DelimiterMatching.prototype.isOpeningDelimiter = function (delimiter) {
        var result = false;
        var found = false;
        for (var i = 0; i < this.delimiters.length; i++) {
            var collection = this.delimiters[i];
            if (collection[0] == delimiter || collection[1] == delimiter) {
                found = true;
                result = collection[0] == delimiter;
                break;
            }
        }
        if (!found)
            throw 'Invalid delimiter';
        return result;
    };
    DelimiterMatching.prototype.getClosingDelimiter = function (delimiter) {
        for (var i = 0; i < this.delimiters.length; i++) {
            if (delimiter == this.delimiters[i][0])
                return this.delimiters[i][1];
        }
        return null;
    };
    DelimiterMatching.prototype.validateDelimiters = function () {
        for (var i = 0; i < this.input.length; i++) {
            if (this.preservedDelimiters.includes(this.input[i])) {
                if (this.isOpeningDelimiter(this.input[i])) {
                    this.stack.push(this.input[i]);
                }
                else {
                    var topDelimiter = this.stack.pop();
                    if (this.getClosingDelimiter(topDelimiter) != this.input[i])
                        return false;
                }
            }
        }
        return true;
    };
    return DelimiterMatching;
}());
var delimiterMatcher = new DelimiterMatching('a{b(c[d]e)f}');
delimiterMatcher.validateDelimiters() ? console.log('Expression is valid') : console.log('Expression is invalid');
