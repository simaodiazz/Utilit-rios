import { Client, REST, Routes } from "discord.js";
import { config } from 'dotenv'
import { ClearCommand } from "./commands/clear.command";

config()

async function main() {

    const { DISCORD_APPLICATION_TOKEN, DISCORD_APPLICATION_ID, DISCORD_SERVER_ID } = process.env

    const clearCommand = new ClearCommand();

    const commands = [
        clearCommand.build().toJSON()
    ]

    /**
     * Criando uma instância do cliente do discord
     */
    const client = new Client({
        intents: [
            "GuildMessages",
            "Guilds",
            "DirectMessages",
            "MessageContent",
            "GuildEmojisAndStickers",
            "GuildVoiceStates",
            "GuildMembers",
        ],
    });

    const rest = new REST(
        {
            version: '10'
        }
    ).setToken(DISCORD_APPLICATION_TOKEN || "")

    await rest.put(
        Routes.applicationGuildCommands(
            DISCORD_APPLICATION_ID || "",
            DISCORD_SERVER_ID || ""
        ), 
        {
            body: commands
        }
    )
    /**
     * Ligando a aplicação do discord.js
     */
    await client.login(DISCORD_APPLICATION_TOKEN || "")

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) {
            return;
        }

        if (interaction.commandName === "clear") {
            await clearCommand.execute(interaction);
        }
    })

    console.log('Aplicação de discord ativada.')
}

main()
