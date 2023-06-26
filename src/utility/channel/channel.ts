import { Channel } from "discord.js"
import { ChannelOptions } from "./channel.options"
import { channels } from "./channel.container"

export function Channel(options: ChannelOptions) {
    return function(target: Function) {
        channels.set(options.id as string, options)
    }
}
