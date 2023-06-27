"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandContainer = void 0;
class CommandContainer {
    constructor(client) {
        this.client = client;
        this.commands = new Map();
    }
    add(id, func) {
        this.commands.set(id, func);
    }
    get(id) {
        if (!this.commands.has(id)) {
            return;
        }
        return this.commands.get(id);
    }
    getAll() {
        return this.commands;
    }
    build(id) {
        if (!this.commands.has(id)) {
            return;
        }
        const command = this.commands.get(id);
        // Parse SlashCommandBuilder to JSON
        const data = command.prototype.build();
        // Create event of interaction-
        this.client.on('interactionCreate', interaction => {
            if (!interaction.isCommand())
                return;
            if (!interaction.commandName === data.name)
                return;
            command.prototype.execute(interaction);
        });
        return data;
    }
    buildAll() {
        for (let key of this.commands.keys()) {
            this.build(key);
        }
    }
}
exports.CommandContainer = CommandContainer;
