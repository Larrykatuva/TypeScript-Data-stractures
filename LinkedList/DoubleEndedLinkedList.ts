import {Link} from "./Link";


class DoubleEndedLinkedList<T> {
    first: Link<T> | null | undefined;
    last: Link<T> | null | undefined;

    constructor() {
        this.last = null;
        this.first = null;
    }

    isEmpty(): boolean {
        return !this.first;
    }

    insertFirst(data: T): void {
        const newLink = new Link<T>(data);
        if (this.isEmpty()) this.last = newLink;
        newLink.next = this.first
        this.first = newLink;
    }

    insertLast(data: T): void {
        const newLink = new Link<T>(data)
        if (this.isEmpty()) {
            this.first = newLink;
        } else {
            this.last ? this.last.next = newLink: null;
        }
        this.last = newLink
    }

    deleteFirst(): void {
        if (this.first){
            if (this.first.next == null){
                this.last = null;
            }
            this.first.next = this.first;
        }
    }

    displayList(): void {
        let result = '[ '
        let currentLink = this.first;
        while (currentLink) {
            result += `${currentLink.data} -> `
            currentLink = currentLink.next
        }
        result = result.slice(0, -3);
        result += ']'
        console.log(result)
    }
}


const linkedList = new DoubleEndedLinkedList<number>();
linkedList.insertFirst(20);
linkedList.insertFirst(34);
linkedList.insertFirst(78)
linkedList.insertFirst(12)
linkedList.displayList()
// linkedList.deleteFirst()
linkedList.insertFirst(200)
linkedList.insertLast(405)
linkedList.displayList()