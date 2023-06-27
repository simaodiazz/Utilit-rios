import { Channel, Client, Guild, GuildChannelTypes } from "discord.js";
import { ChannelOptions } from "./channel.options";
import { Tuple } from "../../tuple";

export class ChannelContainer {

    private client: Client
    private channels: Map<String, Tuple<ChannelOptions, Channel>>

    constructor(client: Client) {
        this.client = client
        this.channels = new Map<String, Tuple<ChannelOptions, Channel>>()
    }

    get(id: string) {
        if (!this.channels.has(id)) {
            return undefined;
        }
        return this.channels.get(id)
    }

    getAll() {
        return this.channels
    }

    edit(options: ChannelOptions) {
        const channel = this.get(options.id as string) as Tuple<ChannelOptions, Channel>

        if (options.name != channel?.getFirst().name) 
            channel.getFirst().name = options.name
        
        if (options.delay != channel?.getFirst().delay) 
            channel.getFirst().delay = options.delay
        
        if (options.permissions != channel?.getFirst().permissions) 
            channel.getFirst().permissions = options.permissions
        
        if (options.users != channel?.getFirst().users) 
            channel.getFirst().users = options.users

        return this.channels.set(options.id as string, channel);
    }

    async build(id: string): Promise<Channel> {

        const options: ChannelOptions = this.get(id)?.getFirst() as ChannelOptions

        const guild: Guild = this.client.guilds.cache.get(process.env.DISCORD_SERVER_ID as string) as Guild

        const channel = await guild.channels.create(
            {
                name: options.name as string,
                type: options.type as GuildChannelTypes,
                permissionOverwrites: options.permissions && options.users
            }
        )

        this.channels.get(id)?.setSecond(channel)

        return channel
    }

    async buildAll() {
        for (let [key] of this.channels) {
            this.build(key as string)
        }
    }
}
