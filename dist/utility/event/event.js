"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
const event_container_1 = require("./event.container");
function Listener(event) {
    return function (target) {
        var _a;
        if (event.length === 0 || event === undefined || event === null) {
            throw new Error("O evento não pode ser vazio, undefined ou null");
        }
        if (event_container_1.modules.has(event)) {
            (_a = event_container_1.modules.get(event)) === null || _a === void 0 ? void 0 : _a.push(target);
        }
        else {
            const functions = [];
            functions.push(target);
            event_container_1.modules.set(event, functions);
        }
    };
}
exports.Listener = Listener;
