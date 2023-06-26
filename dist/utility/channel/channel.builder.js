"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelBuilder = void 0;
const channel_1 = require("./channel");
class ChannelBuilder {
    constructor(guild) {
        this.guild = guild;
    }
    get(id) {
        return channel_1.channels.get(id);
    }
    build(id) {
        const channelOptions = this.get(id);
        this.guild.channels.create({
            name: channelOptions.name,
            type: channelOptions.type,
            permissionOverwrites: channelOptions.permissions && channelOptions.users
        });
    }
}
exports.ChannelBuilder = ChannelBuilder;
