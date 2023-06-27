import { ChannelContainer } from "../utility/discord/channel/channel.container";
import { CommandContainer } from "../utility/discord/command/command.container";
import { EventContainer } from "../utility/discord/event/event.container";
import { EmbedContainer } from "../utility/discord/message/embed/embed.container";

import { config } from "dotenv"

import "./commands/test.command"
import "./commands/embed/embed.test"

import { Client, REST } from "discord.js";
import { ButtonContainer } from "../utility/discord/message/button/button.container";

export class Main {

    private static instance: Main

    private client: Client
    private rest: REST

    private channelContainer: ChannelContainer
    private commandContainer: CommandContainer
    private eventContainer: EventContainer
    private embedContainer: EmbedContainer
    private buttonsContainer: ButtonContainer

    constructor() {

        config()

        this.client = new Client(
            {
                intents: [
                    'GuildMembers',
                    'GuildMessages',
                    'MessageContent'
                ]
            }
        )

        this.client.login(process.env.DISCORD_APPLICATION_TOKEN)

        this.rest = new REST(
            {
                version: '10'
            }
        )

        this.channelContainer = new ChannelContainer(this.client)
        this.commandContainer = new CommandContainer(this.client)
        this.eventContainer = new EventContainer(this.client)
        this.embedContainer = new EmbedContainer(this.client)
        this.buttonsContainer = new ButtonContainer(this.client)

        console.log('Aplicação de discord ativada.')
    }

    public static getInstance() {
        return this.instance === undefined ? new Main : this.instance
    }

    public getChannelContainer() {
        return this.channelContainer
    }

    public getCommandContainer() {
        return this.commandContainer
    }

    public getEventContainer() {
        return this.eventContainer
    }

    public getEmbedContainer() {
        return this.embedContainer
    }

    public getButtonContainer() {
        return this.buttonsContainer
    }
}

Main.getInstance()






















































