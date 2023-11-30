"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(size) {
        this.maxSize = size;
        this.queArray = new Array(this.maxSize);
        this.front = 0;
        this.rear = -1;
        this.nItems = 0;
    }
    Queue.prototype.getSize = function () {
        return this.nItems;
    };
    Queue.prototype.isFull = function () {
        return this.nItems === this.maxSize;
    };
    Queue.prototype.isEmpty = function () {
        return this.nItems === 0;
    };
    Queue.prototype.peekFront = function () {
        return this.queArray[this.front];
    };
    Queue.prototype.insert = function (value) {
        if (this.rear == this.maxSize)
            this.rear = -1;
        this.queArray[++this.rear] = value;
        this.nItems++;
    };
    Queue.prototype.remove = function () {
        var result = this.queArray[this.front++];
        if (this.front == this.maxSize)
            this.front = 0;
        this.nItems--;
        return result;
    };
    return Queue;
}());
exports.Queue = Queue;
// console.log('*****************************')
// const queue = new Queue<number>(5)
// queue.insert(1);
// queue.insert(90)
// queue.insert(34)
// queue.insert(5)
// queue.insert(6)
// console.log('Array =>',queue.queArray)
// console.log('No. of Items =>',queue.nItems)
// console.log('Front item =>',queue.peekFront())
// console.log('Rear item =>', queue.rear)
// queue.remove()
// console.log('Updated front item =>',queue.peekFront())
