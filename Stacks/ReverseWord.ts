import { Stack } from "./Stack";

class Reverser{
    input: string;
    output: string;
    stack: any;

    constructor(word: string){
        this.input = word;
        this.stack = new Stack<string>(this.input.length);
        this.output = ''
    }

    pushCharacters(): void {
        for (let i = 0; i < this.input.length; i++) {
            this.stack.push(this.input.charAt(i));
        }
    }

    reverse(): string {
        this.pushCharacters();
        while (!this.stack.isEmpty()){
            this.output += this.stack.pop();
        }
        return this.output;
    }

    
}

console.log('\n\n********************************');
const reverser = new Reverser('Katuva Muvaka Lawrence');
console.log(reverser.reverse());
 
