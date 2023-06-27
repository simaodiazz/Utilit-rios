import { Client } from "discord.js"

export class CommandContainer {

    private client: Client
    private commands: Map<String, Function>

    constructor(client: Client) {
        this.client = client
        this.commands = new Map<String, Function>()
    }

    add(id: string, func: Function) {
        this.commands.set(id, func)
    }

    get(id: string) {
        if (!this.commands.has(id)) {
            return
        }
        return this.commands.get(id)
    }

    getAll() {
        return this.commands
    }

    build(id: string) {

        if (!this.commands.has(id)) {
            return;
        }

        const command = this.commands.get(id)

        // Parse SlashCommandBuilder to JSON
        const data = command.prototype.build()
        
        // Create event of interaction-
        this.client.on('interactionCreate', interaction => {

            if (!interaction.isCommand()) 
                return;
        
            if (!interaction.commandName === data.name) 
                return;

            command.prototype.execute(interaction)

        })
        return data
    }

    buildAll() {
        for (let key of this.commands.keys()) {
            this.build(key as string)
        }
    }
}
