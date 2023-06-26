"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandContainer = exports.Command = void 0;
const modules = [];
function Command() {
    return function (target) {
        modules.push(target);
    };
}
exports.Command = Command;
class CommandContainer {
    constructor(client) {
        this.commands = [];
        modules.forEach(module => {
            const commandJSON = module.prototype.build();
            this.commands.push(commandJSON);
            client.on('interactionCreate', interaction => {
                if (!interaction.isCommand())
                    return;
                if (commandJSON.name === interaction.commandName)
                    module.prototype.execute(interaction);
            });
        });
    }
}
exports.CommandContainer = CommandContainer;
