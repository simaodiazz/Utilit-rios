"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const command_container_1 = require("./command.container");
function Command() {
    return function (target) {
        command_container_1.modules.push(target);
    };
}
exports.Command = Command;
