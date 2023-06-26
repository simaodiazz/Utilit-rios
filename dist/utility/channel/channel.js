"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = exports.channels = void 0;
exports.channels = new Map();
function Channel(options) {
    return function (target) {
        exports.channels.set(options.id, options);
    };
}
exports.Channel = Channel;
