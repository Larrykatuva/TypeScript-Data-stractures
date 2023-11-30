import {Stack} from "./Stack";

class DelimiterMatching {
    preservedDelimiters = ['{', '}', '(', ')', '[', ']']
    delimiters: string[][] = [['{','}'], ['(',')'],['[',']']]
    stack: any;
    input: string;

    constructor(expression: string) {
        this.input = expression;
        this.stack = new Stack<string>(this.input.length);
    }

    isOpeningDelimiter(delimiter: string): boolean {
        let result: boolean = false
        let found: boolean = false
        for (let i: number = 0; i < this.delimiters.length; i++){
            const collection: string[] = this.delimiters[i];
            if (collection[0] == delimiter || collection[1] == delimiter) {
                found = true;
                result = collection[0] == delimiter
                break;
            }
        }
        if (!found) throw 'Invalid delimiter'
        return result;
    }

    getClosingDelimiter(delimiter: string): string | null {
        for (let i: number = 0; i < this.delimiters.length; i++) {
            if (delimiter == this.delimiters[i][0]) return this.delimiters[i][1]
        }
        return null
    }

    validateDelimiters(): boolean {
        for (let i: number = 0; i < this.input.length; i++){
            if (this.preservedDelimiters.includes(this.input[i])) {
                if (this.isOpeningDelimiter(this.input[i])) {
                    this.stack.push(this.input[i])
                } else {
                    const topDelimiter = this.stack.pop()
                    if (this.getClosingDelimiter(topDelimiter) != this.input[i]) return false
                }
            }
        }
        return true;
    }
}

const delimiterMatcher = new DelimiterMatching('a{b(c[d]e)f}')
delimiterMatcher.validateDelimiters() ? console.log('Expression is valid'): console.log('Expression is invalid')