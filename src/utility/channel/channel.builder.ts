import { Channel, Guild, GuildChannelTypes } from "discord.js";
import { ChannelOptions } from "./channel.options";
import { channels } from "./channel";

export class ChannelBuilder {

    private guild: Guild

    constructor(guild: Guild) {
        this.guild = guild
    }

    get(id: string): ChannelOptions {
        return channels.get(id) as ChannelOptions
    }

    build(id: string): void {

        const channelOptions: ChannelOptions = this.get(id)

        this.guild.channels.create(
            {
                name: channelOptions.name,
                type: channelOptions.type as GuildChannelTypes,
                permissionOverwrites: channelOptions.permissions && channelOptions.users
            }
        )
    }
}
