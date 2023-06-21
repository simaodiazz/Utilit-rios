"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
const clear_command_1 = require("./commands/clear.command");
(0, dotenv_1.config)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const { DISCORD_APPLICATION_TOKEN, DISCORD_APPLICATION_ID, DISCORD_SERVER_ID } = process.env;
        const clearCommand = new clear_command_1.ClearCommand();
        const commands = [
            clearCommand.build().toJSON()
        ];
        /**
         * Criando uma instância do cliente do discord
         */
        const client = new discord_js_1.Client({
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
        const rest = new discord_js_1.REST({
            version: '10'
        }).setToken(DISCORD_APPLICATION_TOKEN || "");
        yield rest.put(discord_js_1.Routes.applicationGuildCommands(DISCORD_APPLICATION_ID || "", DISCORD_SERVER_ID || ""), {
            body: commands
        });
        /**
         * Ligando a aplicação do discord.js
         */
        yield client.login(DISCORD_APPLICATION_TOKEN || "");
        client.on('interactionCreate', (interaction) => __awaiter(this, void 0, void 0, function* () {
            if (!interaction.isCommand()) {
                return;
            }
            if (interaction.commandName === "clear") {
                yield clearCommand.execute(interaction);
            }
        }));
        console.log('Aplicação de discord ativada.');
    });
}
main();
