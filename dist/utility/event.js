"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerContainer = exports.Listener = void 0;
const classes = new Map();
function Listener(event) {
    return function (target) {
        var _a;
        if (event.length === 0 || event === undefined || event === null) {
            throw new Error("O evento não pode ser vazio, undefined ou null");
        }
        if (classes.has(event)) {
            (_a = classes.get(event)) === null || _a === void 0 ? void 0 : _a.push(target);
        }
        else {
            const functions = [];
            functions.push(target);
            classes.set(event, functions);
        }
    };
}
exports.Listener = Listener;
class ListenerContainer {
    constructor(client) {
        for (let [key, value] of classes) {
            for (let model of value) {
                client.on(key, interaction => {
                    model.prototype.execute(interaction);
                });
            }
        }
    }
}
exports.ListenerContainer = ListenerContainer;
