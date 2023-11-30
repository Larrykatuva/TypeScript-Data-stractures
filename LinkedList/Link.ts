
export class Link<T> {
    data: T
    next?: Link<T> | null;

    constructor(data: T) {
        this.data = data;
    }

    displayData(): void {
        console.log("Data =>", this.data)
    }

}