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
exports.ClearCommand = void 0;
const discord_js_1 = require("discord.js");
class ClearCommand {
    constructor() { }
    build() {
        return new discord_js_1.SlashCommandBuilder()
            .setName('clear')
            .setDescription('Comando para limpar um determinado numero de mensagens.')
            .addIntegerOption(integer => integer
            .setName("quantidade")
            .setDescription("Quantidade de mensagens para apagar")
            .setMinValue(0)
            .setMaxValue(100)
            .setAutocomplete(false)
            .setRequired(true));
    }
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const channel = interaction.channel;
            const size = interaction.options.get("quantidade");
            const messages = yield channel.messages.fetch({
                limit: size || 100
            });
            channel.bulkDelete(messages);
            const embed = new discord_js_1.EmbedBuilder()
                .setColor("#00FF00")
                .setTitle("Mensagens Apagadas")
                .setDescription(`Foram eliminadas ${size} mensagens apagadas pelo admistrador ${interaction.member}`)
                .setTimestamp();
            yield interaction.reply({
                embeds: [embed]
            });
        });
    }
}
exports.ClearCommand = ClearCommand;
