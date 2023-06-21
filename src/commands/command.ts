import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export interface Command {

    build(): SlashCommandBuilder
    execute(interaction: CommandInteraction): Promise<void>

}