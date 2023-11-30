var MainArray = /** @class */ (function () {
    function MainArray() {
        this.arr = [];
    }
    MainArray.prototype.populateArray = function () {
        for (var i = 0; i < 10; i++) {
            this.arr.push(i);
        }
    };
    MainArray.prototype.deleteItem = function (item) {
        var index;
        var arrLength = this.arr.length;
        for (index = 0; index < arrLength; index++) {
            if (this.arr[index] === item)
                break;
        }
        for (var k = index; k < arrLength - 1; k++) {
            this.arr[k] = this.arr[k + 1];
        }
    };
    return MainArray;
}());
var mainArray = new MainArray();
mainArray.populateArray();
console.log(mainArray.arr);
mainArray.deleteItem(3);
console.log(mainArray.arr);
