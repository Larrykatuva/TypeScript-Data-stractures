
export class DoubleLink<T> {
    data: T;
    next?: DoubleLink<T> | null;
    previous?: DoubleLink<T> | null;

    constructor(data: T) {
        this.data = data;
    }

    displayData(): void {
        console.log("Data =>", this.data)
    }
}

