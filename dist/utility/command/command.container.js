"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandContainer = exports.modules = void 0;
const command_builder_1 = require("./command.builder");
exports.modules = [];
const commands = [];
class CommandContainer {
    constructor(client) {
        this.commandBuilder = new command_builder_1.CommandBuilder(client);
    }
    init() {
        for (let module of exports.modules)
            commands.push(this.commandBuilder.build(module));
    }
}
exports.CommandContainer = CommandContainer;
