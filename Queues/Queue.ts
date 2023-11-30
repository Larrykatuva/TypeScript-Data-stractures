
export class Queue<T> {
    public maxSize: number;
    public queArray: T[];
    public front: number;
    public rear: number;
    public nItems: number;

    constructor(size: number) {
        this.maxSize = size;
        this.queArray = new Array<T>(this.maxSize);
        this.front = 0;
        this.rear = -1;
        this.nItems = 0;
    }

    getSize(): number {
        return this.nItems;
    }

    isFull(): boolean {
        return this.nItems === this.maxSize;
    }

    isEmpty(): boolean {
        return this.nItems === 0;
    }

    peekFront(): T {
        return this.queArray[this.front];
    }

    insert(value: T): void {
        if (this.rear == this.maxSize) this.rear = -1;
        this.queArray[++this.rear] = value;
        this.nItems++;
    }

    remove(): T {
        const result: T = this.queArray[this.front++];
        if (this.front == this.maxSize) this.front = 0;
        this.nItems--
        return result
    }
}

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