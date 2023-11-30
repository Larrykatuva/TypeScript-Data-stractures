/**
 * Both swaps and comparisons are proportional to N 2 . Because constants don’t count
in Big O notation, we can ignore the 2 and the 4 and say that the bubble sort runs in
O(N 2 ) time. This is slow, as you can verify by running the BubbleSort Workshop
applet with 100 bars
 */

import { SharedClass } from "./SharedClass";

class BubbleSort<T> extends SharedClass<T>{

    sort(): void {
        for (let i = this.arr.length - 1; i > 1; i--) {
            for(let j = 0; j < i; j++) {
                if (this.arr[j] > this.arr[j + 1]) this.swap(j, j + 1);
            }
        }
    }

}

const bubbleSort = new BubbleSort<number>();
bubbleSort.addItem(3);
bubbleSort.addItem(34);
bubbleSort.addItem(2);
bubbleSort.addItem(22);
bubbleSort.addItem(17);
bubbleSort.addItem(8);
console.log(bubbleSort.arr);
bubbleSort.sort()
console.log(bubbleSort.arr);

