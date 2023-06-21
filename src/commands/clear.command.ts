import { CommandInteraction, EmbedBuilder, SlashCommandBuilder, TextChannel } from "discord.js";
import { Command } from "./command";

export class ClearCommand implements Command {

    constructor() { }

    build(): SlashCommandBuilder {
        return new SlashCommandBuilder()
            .setName('clear')
            .setDescription('Comando para limpar um determinado numero de mensagens.')
            .addIntegerOption(integer => 
                integer
                    .setName("quantidade")    
                    .setDescription("Quantidade de mensagens para apagar")
                    .setMinValue(0)
                    .setMaxValue(100)
                    .setAutocomplete(false)
                    .setRequired(true)
            )
    }

    async execute(interaction: CommandInteraction): Promise<void> {

        const channel = interaction.channel as TextChannel

        const size = interaction.options.get("quantidade")

        const messages = await channel.messages.fetch(
            {
                limit: size || 100
            }
        )

        channel.bulkDelete(messages)

        const embed = new EmbedBuilder()
            .setColor("#00FF00")
            .setTitle("Mensagens Apagadas")
            .setDescription(`Foram eliminadas ${size} mensagens apagadas pelo admistrador ${interaction.member}`)
            .setTimestamp()

        await interaction.reply(
            {
                embeds: [ embed ]
            }
        )
    }
}
