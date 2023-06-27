"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tuple = void 0;
class Tuple {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    getFirst() {
        return this.first;
    }
    setFirst(first) {
        this.first = first;
    }
    getSecond() {
        return this.second;
    }
    setSecond(second) {
        this.second = second;
    }
}
exports.Tuple = Tuple;
