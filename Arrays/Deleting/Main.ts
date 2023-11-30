class MainArray {
    arr: number[] =[];

    populateArray(): void {
        for (let i = 0; i < 10; i++){
            this.arr.push(i)
        }
    }

    deleteItem(item: number): void {
        let index: number;
        let arrLength = this.arr.length;
        for (index = 0; index < arrLength; index++){
            if (this.arr[index] === item) break;
        }
        for (let k = index; k < arrLength - 1; k++) {
            this.arr[k] = this.arr[k+1];
        }    
    }
}

const mainArray = new MainArray();
mainArray.populateArray();
console.log(mainArray.arr);
mainArray.deleteItem(3)
console.log(mainArray.arr);

