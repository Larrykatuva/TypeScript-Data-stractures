/**
 * The selection sort performs the same number of comparisons as the bubble sort:
N*(N-1)/2. For 10 data items, this is 45 comparisons. However, 10 items require fewer
than 10 swaps. With 100 items, 4,950 comparisons are required, but fewer than 100
swaps. For large values of N, the comparison times will dominate, so we would have
to say that the selection sort runs in O(N 2 ) time, just as the bubble sort did. However,
it is unquestionably faster because there are so few swaps. For smaller values of N,
the selection sort may in fact be considerably faster, especially if the swap times are
much larger than the comparison times.
 */

import { SharedClass } from "./SharedClass";


class SelectionSort<T> extends SharedClass<T> {
    max: number;
    out: number;
    min: number;
    in: number;

    sort(): void {
        for (this.out = 0; this.out < this.arr.length - 1; this.out++) {
            this.min = this.out;
            for (this.in = this.out + 1; this.in < this.arr.length; this.in++) {
                if (this.arr[this.in] < this.arr[this.min]) this.min = this.in;
            }
            this.swap(this.out, this.min);
        }
    }
}

const selectionSort = new SelectionSort<number>();
selectionSort.addItem(5);
selectionSort.addItem(11);
selectionSort.addItem(45);
selectionSort.addItem(90);
selectionSort.addItem(3);
selectionSort.addItem(65);
console.log(selectionSort.arr);
selectionSort.sort()
console.log(selectionSort.arr);


