export class Tuple<F, S> {

    private first: F
    private second: S

    constructor(first: F, second: S) {
        this.first = first
        this.second = second
    }

    public getFirst() {
        return this.first;
    }
 
    public setFirst(first: F) {
        this.first = first
    }

    public getSecond() {
        return this.second
    }

    public setSecond(second: S) {
        this.second = second
    }
}
