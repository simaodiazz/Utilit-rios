"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const channel_container_1 = require("../utility/discord/channel/channel.container");
const command_container_1 = require("../utility/discord/command/command.container");
const event_container_1 = require("../utility/discord/event/event.container");
const embed_container_1 = require("../utility/discord/message/embed/embed.container");
const dotenv_1 = require("dotenv");
require("./commands/test.command");
require("./commands/embed/embed.test");
const discord_js_1 = require("discord.js");
const button_container_1 = require("../utility/discord/message/button/button.container");
class Main {
    constructor() {
        (0, dotenv_1.config)();
        this.client = new discord_js_1.Client({
            intents: [
                'GuildMembers',
                'GuildMessages',
                'MessageContent'
            ]
        });
        this.client.login(process.env.DISCORD_APPLICATION_TOKEN);
        this.rest = new discord_js_1.REST({
            version: '10'
        });
        this.channelContainer = new channel_container_1.ChannelContainer(this.client);
        this.commandContainer = new command_container_1.CommandContainer(this.client);
        this.eventContainer = new event_container_1.EventContainer(this.client);
        this.embedContainer = new embed_container_1.EmbedContainer(this.client);
        this.buttonsContainer = new button_container_1.ButtonContainer(this.client);
        console.log('Aplicação de discord ativada.');
    }
    static getInstance() {
        return this.instance === undefined ? new Main : this.instance;
    }
    getChannelContainer() {
        return this.channelContainer;
    }
    getCommandContainer() {
        return this.commandContainer;
    }
    getEventContainer() {
        return this.eventContainer;
    }
    getEmbedContainer() {
        return this.embedContainer;
    }
    getButtonContainer() {
        return this.buttonsContainer;
    }
}
exports.Main = Main;
Main.getInstance();
