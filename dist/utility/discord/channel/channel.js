"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const main_1 = require("../../../app/main");
const tuple_1 = require("../../tuple");
function Channel(options) {
    return function (target) {
        const tuple = new tuple_1.Tuple(options, undefined);
        main_1.Main.getInstance().getChannelContainer().getAll().set(options.id, tuple);
    };
}
exports.Channel = Channel;
