

export class SharedClass<T> {
    arr: T[] = [];

    addItem(item: T): void {
        this.arr.push(item);
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftItem: T = this.arr[leftIndex];
        this.arr[leftIndex] = this.arr[rightIndex];
        this.arr[rightIndex] = leftItem;
    }
}