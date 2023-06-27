import { ColorResolvable, EmbedAuthorOptions, EmbedField, EmbedFooterOptions } from "discord.js"

export type EmbedOptions = {

    id: string
    color?: ColorResolvable
    title?: string
    url?: string
    author?: EmbedAuthorOptions
    description?: string
    thumbnail?: string
    fields?: EmbedField[]
    image?: string
    timestamp?: boolean
    footer?: EmbedFooterOptions

}