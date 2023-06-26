import "./channels/forms.channel"
import "./commands/forms.command"

import { Client, REST, Routes } from "discord.js";
import { CommandContainer } from "../utility/command/command";
import { config } from 'dotenv'

class Main {

    private client: Client
    private rest: REST
    private commandContainer: CommandContainer

    constructor() {
        config()

        const { DISCORD_APPLICATION_TOKEN, DISCORD_APPLICATION_ID, DISCORD_SERVER_ID } = process.env

        this.client = new Client(
            {
                intents: [
                    "MessageContent",
                    "GuildMessages",
                    "GuildMembers"
                ]
            }
        )

        this.rest = new REST(
            {
                version: '10'
            }
        ).setToken(DISCORD_APPLICATION_TOKEN || "")

        this.commandContainer = new CommandContainer(this.client)

        this.rest.put(
            Routes.applicationGuildCommands(
                DISCORD_APPLICATION_ID as string,
                DISCORD_SERVER_ID as string
            ),
            {
                body: this.commandContainer.commands
            }
        )

        this.client.login(DISCORD_APPLICATION_TOKEN || "")

        console.log('Aplicação de discord ativada.')
    }
}

new Main()
