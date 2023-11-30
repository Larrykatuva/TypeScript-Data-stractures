import {Queue} from "./Queue";


class PriorityQueue<T> extends Queue<T> {

    constructor(size: number) {
        super(size);
    }

    override insert(value: T): void{
        if (this.nItems == 0){
            this.queArray[++this.rear] = value
        }else{
            let i: number = 0;
            for( i = this.nItems - 1; i >= 0; i--){
                if (this.queArray[i] > value){
                    this.queArray[i+1] = this.queArray[i];
                    this.rear++
                } else {
                    break;
                }
            }
            this.queArray[i+1] = value;
        }
        this.nItems++;
    }
}


console.log('****************************')
const priorityQueue = new PriorityQueue<number>(5);
priorityQueue.insert(3);
priorityQueue.insert(40);
priorityQueue.insert(1)
priorityQueue.insert(78)
priorityQueue.insert(54);
console.log(priorityQueue.queArray)