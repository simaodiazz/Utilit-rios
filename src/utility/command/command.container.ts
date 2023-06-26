import { Client } from "discord.js"
import { CommandBuilder } from "./command.builder"

export const modules: Function[] = []
const commands: JSON[] = []

export class CommandContainer {

    private commandBuilder: CommandBuilder

    constructor(client: Client) {
        this.commandBuilder = new CommandBuilder(client)
    }

    init() {
        for (let module of modules) commands.push(this.commandBuilder.build(module))
    }
}
