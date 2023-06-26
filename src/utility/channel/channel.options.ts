import { ChannelType, OverwriteResolvable } from "discord.js"

export type ChannelOptions = {
    id: string,
    name: string,
    type: ChannelType,
    delay?: number
    permissions?: OverwriteResolvable[],
    users?: OverwriteResolvable[]
}
