import {DoubleEndedLinkedList} from "./DoubleEndedLinkedList";


class LinkStack<T> {
    linkedList: DoubleEndedLinkedList<T> = new DoubleEndedLinkedList<T>();

    isEmpty(): boolean {
        return this.linkedList.isEmpty();
    }

    pop(): T | null {
        return this.linkedList.deleteFirst();
    }

    insert(value: T): void {
        this.linkedList.insertLast(value);
    }

    peek(): T | null {
        return this.linkedList.first?.data? this.linkedList.first?.data: null;
    }

    printStack(): void {
        this.linkedList.displayList();
    }
}

const stack = new LinkStack<number>();
stack.insert(45)
stack.insert(9)
stack.insert(30)
stack.insert(11)
stack.insert(31)
stack.insert(94)
stack.printStack()
stack.pop()
stack.printStack()