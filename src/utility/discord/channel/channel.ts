import { Channel } from "discord.js"
import { ChannelOptions } from "./channel.options"
import { Main } from "../../../app/main"
import { Tuple } from "../../tuple"

export function Channel(options: ChannelOptions) {
    return function(target: Function) {
        const tuple = new Tuple<ChannelOptions, Channel>(options, undefined)
        Main.getInstance().getChannelContainer().getAll().set(options.id as string, tuple)
    }
}
