"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBuilder = void 0;
const event_container_1 = require("../event/event.container");
class EventBuilder {
    constructor() { }
    init(event, func) {
        var _a;
        if (event === undefined || null || 0) {
            throw new Error("O evento não pode ser vazio, undefined ou null");
        }
        if (event_container_1.modules.has(event)) {
            (_a = event_container_1.modules.get(event)) === null || _a === void 0 ? void 0 : _a.push(func);
        }
        else {
            const functions = [];
            functions.push(func);
            event_container_1.modules.set(event, functions);
        }
    }
}
exports.EventBuilder = EventBuilder;
