"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelBuilder = void 0;
const channel_container_1 = require("./channel.container");
class ChannelBuilder {
    constructor(guild) {
        this.guild = guild;
    }
    get(id) {
        return channel_container_1.channels.get(id);
    }
    change(options) {
        const channel = this.get(options.id);
        if (options.name != channel.name)
            channel.name = options.name;
        if (options.delay != channel.delay)
            channel.delay = options.delay;
        if (options.permissions != channel.permissions)
            channel.permissions = options.permissions;
        if (options.users != channel.users)
            channel.users = options.users;
        return channel_container_1.channels.set(options.id, channel);
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
