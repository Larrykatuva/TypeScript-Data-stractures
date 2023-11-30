import {Link} from "./Link";


class LinkedList<T> {

    first: Link<T> | null | undefined;

    constructor() {
        this.first = null
    }

    isEmpty(): boolean {
        return !this.first;
    }

    insertFirst(value: T): void {
        const newLink = new Link<T>(value);
        newLink.next = this.first
        this.first = newLink;
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

    deleteFirst(): void {
        this.first = this.first?.next
    }

    displayList(): void {
        let currentLink = this.first;
        let result = '[ '
        while (currentLink){
            result += `${currentLink.data} -> `
            currentLink = currentLink.next;
        }
        result = result.slice(0, -3);
        result += ']'
        console.log(result)
    }
}


// const linkedList = new LinkedList<number>();
// linkedList.insertFirst(20);
// linkedList.insertFirst(34);
// linkedList.insertFirst(78)
// linkedList.insertFirst(12)
// linkedList.displayList()
// linkedList.deleteFirst()
// linkedList.insertFirst(200)
// linkedList.displayList()
// console.log('Is 204 found => ', linkedList.findLink(204))
// console.log('Is 20 found => ', linkedList.findLink(20))