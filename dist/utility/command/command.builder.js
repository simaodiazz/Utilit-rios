"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandBuilder = void 0;
class CommandBuilder {
    constructor(client) {
        this.client = client;
    }
    build(func) {
        const commandJSON = func.prototype.build();
        this.client.on('interactionCreate', interaction => {
            if (!interaction.isCommand())
                return;
            if (!interaction.commandName === commandJSON.name)
                return;
            func.prototype.execute(interaction);
        });
        return commandJSON;
    }
}
exports.CommandBuilder = CommandBuilder;
