import { CommandInteraction, SlashCommandBuilder } from "discord.js"

export interface BaseCommand {

    build(): SlashCommandBuilder
    execute(interaction: CommandInteraction): Promise<void>

}