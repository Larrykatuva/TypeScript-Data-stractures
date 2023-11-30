export class Stack<T> {
    maxSize: number;
    stackArray: T[];
    top: number;

    constructor(size: number) {
        this.maxSize = size;
        this.stackArray = new Array<T>(size);
        this.top = -1;
    }

    push(value: T): void {
        this.stackArray[++this.top] = value;
    }

    pop(): T {
        return this.stackArray[this.top--];
    }

    peek(): T {
        return this.stackArray[this.top];
    }

    isEmpty(): boolean {
        return this.top === -1;
    }

    isFull(): boolean {
        return this.top === this.stackArray.length;
    }
}






