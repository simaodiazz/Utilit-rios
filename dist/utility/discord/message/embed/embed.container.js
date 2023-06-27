"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedContainer = void 0;
const discord_js_1 = require("discord.js");
const tuple_1 = require("../../../tuple");
class EmbedContainer {
    constructor(client) {
        this.client = client;
        this.embeds = new Map;
    }
    get(id) {
        return this.embeds.get(id);
    }
    getAll() {
        return this.embeds;
    }
    build(id, options) {
        const embed = options.timestamp ?
            new discord_js_1.EmbedBuilder()
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
                new discord_js_1.EmbedBuilder()
                    .setAuthor(options.author)
                    .setColor(options.color)
                    .setDescription(options.description)
                    .setFields(options.fields)
                    .setFooter(options.footer)
                    .setImage(options.image)
                    .setTimestamp()
                    .setTitle(options.title)
                    .setURL(options.url);
        this.embeds.set(id, new tuple_1.Tuple(options, embed));
    }
    buildAll() {
        for (let [key] of this.embeds) {
            this.build(key, this.get(key).getFirst());
        }
    }
}
exports.EmbedContainer = EmbedContainer;
