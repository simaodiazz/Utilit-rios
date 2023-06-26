"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventContainer = exports.modules = void 0;
exports.modules = new Map();
class EventContainer {
    constructor(client) {
        for (let [key, value] of exports.modules) {
            value.forEach(module => client.on(key, interaction => module.prototype.execute(interaction)));
        }
    }
}
exports.EventContainer = EventContainer;
