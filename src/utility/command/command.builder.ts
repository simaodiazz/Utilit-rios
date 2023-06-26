import { Client } from "discord.js";
import { BaseCommand } from "./command.base";

export class CommandBuilder {

    private client: Client

    constructor(client: Client) {
        this.client = client;
    }

    build(func: Function) {
        const commandJSON = func.prototype.build()
        this.client.on('interactionCreate', interaction => {
            if (!interaction.isCommand()) return;
            if (!interaction.commandName === commandJSON.name) return;
            func.prototype.execute(interaction)
        })
        return commandJSON
    }
}
