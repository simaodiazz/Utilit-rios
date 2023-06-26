"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./channels/forms.channel");
require("./commands/forms.command");
const discord_js_1 = require("discord.js");
const command_1 = require("../utility/command/command");
const dotenv_1 = require("dotenv");
class Main {
    constructor() {
        (0, dotenv_1.config)();
        const { DISCORD_APPLICATION_TOKEN, DISCORD_APPLICATION_ID, DISCORD_SERVER_ID } = process.env;
        this.client = new discord_js_1.Client({
            intents: [
                "MessageContent",
                "GuildMessages",
                "GuildMembers"
            ]
        });
        this.rest = new discord_js_1.REST({
            version: '10'
        }).setToken(DISCORD_APPLICATION_TOKEN || "");
        this.commandContainer = new command_1.CommandContainer(this.client);
        this.rest.put(discord_js_1.Routes.applicationGuildCommands(DISCORD_APPLICATION_ID, DISCORD_SERVER_ID), {
            body: this.commandContainer.commands
        });
        this.client.login(DISCORD_APPLICATION_TOKEN || "");
        console.log('Aplicação de discord ativada.');
    }
}
new Main();
