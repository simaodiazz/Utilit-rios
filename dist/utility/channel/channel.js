"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const channel_container_1 = require("./channel.container");
function Channel(options) {
    return function (target) {
        channel_container_1.channels.set(options.id, options);
    };
}
exports.Channel = Channel;
