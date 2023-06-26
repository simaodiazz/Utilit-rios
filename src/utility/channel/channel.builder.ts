import { Guild, GuildChannelTypes } from "discord.js";
import { ChannelOptions } from "./channel.options";
import { channels } from "./channel.container";

export class ChannelBuilder {

    private guild: Guild

    constructor(guild: Guild) {
        this.guild = guild
    }

    get(id: string): ChannelOptions {
        return channels.get(id) as ChannelOptions
    }

    change(options: ChannelOptions) {
        const channel = this.get(options.id as string)

        if (options.name != channel.name) channel.name = options.name
        if (options.delay != channel.delay) channel.delay = options.delay
        if (options.permissions != channel.permissions) channel.permissions = options.permissions
        if (options.users != channel.users) channel.users = options.users

        return channels.set(options.id as string, channel);
    }

    build(id: string): void {

        const channelOptions: ChannelOptions = this.get(id)

        this.guild.channels.create(
            {
                name: channelOptions.name as string,
                type: channelOptions.type as GuildChannelTypes,
                permissionOverwrites: channelOptions.permissions && channelOptions.users
            }
        )
    }
}
