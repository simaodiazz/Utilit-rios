"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventContainer = void 0;
class EventContainer {
    constructor(client) {
        this.client = client;
        this.events = new Map();
    }
    get(id) {
        return this.events.get(id);
    }
    getAll() {
        return this.events;
    }
    build(eventName, func) {
        var _a;
        if (event === undefined || null || 0) {
            throw new Error("O evento não pode ser vazio, undefined ou null");
        }
        if (this.events.has(eventName)) {
            (_a = this.events.get(eventName)) === null || _a === void 0 ? void 0 : _a.push(func);
        }
        else {
            this.events.set(eventName, [func]);
        }
        this.client.on(eventName, event => func.prototype.execute(event));
    }
    buildAll() {
        for (let [key, values] of this.events) {
            for (let value of values) {
                this.build(key, value);
            }
        }
    }
}
exports.EventContainer = EventContainer;
