import { Client, EmbedBuilder } from "discord.js";
import { Tuple } from "../../../tuple";
import { EmbedOptions } from "./embed.options";

export class EmbedContainer {

    private client: Client
    private embeds: Map<String, Tuple<EmbedOptions, EmbedBuilder>>

    constructor(client: Client) {
        this.client = client
        this.embeds = new Map<String, Tuple<EmbedOptions, EmbedBuilder>>
    }

    get(id: string) {
        return this.embeds.get(id)
    }

    getAll() {
        return this.embeds
    }

    build(id: string, options: EmbedOptions) {
        
        const embed = options.timestamp ?
            new EmbedBuilder()
                .setAuthor(options.author)
                .setColor(options.color)
                .setDescription(options.description)
                .setFields(options.fields)
                .setFooter(options.footer)
                .setImage(options.image)
                .setThumbnail(options.thumbnail)
                .setTimestamp()
                .setTitle(options.title)
                .setURL(options.url)
            :
            new EmbedBuilder()
                .setAuthor(options.author)
                .setColor(options.color)
                .setDescription(options.description)
                .setFields(options.fields)
                .setFooter(options.footer)
                .setImage(options.image)
                .setTimestamp()
                .setTitle(options.title)
                .setURL(options.url)

        this.embeds.set(id, new Tuple<EmbedOptions, EmbedBuilder>(options, embed))
    }

    buildAll() {
        for (let [key] of this.embeds) {
            this.build(key as string, this.get(key as string).getFirst())
        }
    }
}
