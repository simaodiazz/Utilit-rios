import { CacheType, CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "../../utility/discord/command/command";
import { BaseCommand } from "../../utility/discord/command/command.base";

@Command()
export class TestCommand implements BaseCommand {

    build(): SlashCommandBuilder {
        return new SlashCommandBuilder()
            .setName('command')
            .setDescription('Descrição do comando aleatória.')
    }

    async execute(interaction: CommandInteraction): Promise<void> {
        
    }
}