import {DoubleLink} from "./DoubleLink";


class DoubleLinkedList<T> {
    first: DoubleLink<T> | null | undefined;

    constructor() {
        this.first = null;
    }

    isEmpty(): boolean {
        return !this.first;
    }

    findLink(value: T): boolean {
        let currentLink = this.first;
        while (currentLink){
            if (currentLink.data == value){
                return true
            } else {
                currentLink = currentLink.next;
            }
        }
        return false
    }

    insertFirst(value: T): void {
        const newLink = new DoubleLink<T>(value);
        newLink.next = this.first
        this.first = newLink;
    }

    displayList(): void {
        let currentLink = this.first;
        let result = '[ '
        while (currentLink){
            result += `${currentLink.data} -> `
            currentLink = currentLink.next
        }
        result = result.slice(0, -3);
        result += ']'
        console.log(result)
    }

    deleteFirst(): void {
        this.first = this.first?.next
        this.first ? this.first.previous = null : null
    }
}


console.log('************************************')
const linkedList = new DoubleLinkedList<number>();
linkedList.insertFirst(20);
linkedList.insertFirst(34);
linkedList.insertFirst(78)
linkedList.insertFirst(12)
linkedList.displayList()
linkedList.deleteFirst()
linkedList.insertFirst(200)
linkedList.displayList()
console.log('Is 204 found => ', linkedList.findLink(204))
console.log('Is 20 found => ', linkedList.findLink(20))