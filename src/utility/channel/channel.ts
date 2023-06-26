import { Channel } from "discord.js"
import { ChannelOptions } from "./channel.options"

export const channels: Map<String, ChannelOptions> = new Map<String, ChannelOptions>()

export function Channel(options: ChannelOptions) {
    return function(target: Function) {
        channels.set(options.id, options)
    }
}
