"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelContainer = void 0;
class ChannelContainer {
    constructor(client) {
        this.client = client;
        this.channels = new Map();
    }
    get(id) {
        if (!this.channels.has(id)) {
            return undefined;
        }
        return this.channels.get(id);
    }
    getAll() {
        return this.channels;
    }
    edit(options) {
        const channel = this.get(options.id);
        if (options.name != (channel === null || channel === void 0 ? void 0 : channel.getFirst().name))
            channel.getFirst().name = options.name;
        if (options.delay != (channel === null || channel === void 0 ? void 0 : channel.getFirst().delay))
            channel.getFirst().delay = options.delay;
        if (options.permissions != (channel === null || channel === void 0 ? void 0 : channel.getFirst().permissions))
            channel.getFirst().permissions = options.permissions;
        if (options.users != (channel === null || channel === void 0 ? void 0 : channel.getFirst().users))
            channel.getFirst().users = options.users;
        return this.channels.set(options.id, channel);
    }
    build(id) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const options = (_a = this.get(id)) === null || _a === void 0 ? void 0 : _a.getFirst();
            const guild = this.client.guilds.cache.get(process.env.DISCORD_SERVER_ID);
            const channel = yield guild.channels.create({
                name: options.name,
                type: options.type,
                permissionOverwrites: options.permissions && options.users
            });
            (_b = this.channels.get(id)) === null || _b === void 0 ? void 0 : _b.setSecond(channel);
            return channel;
        });
    }
    buildAll() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let [key] of this.channels) {
                this.build(key);
            }
        });
    }
}
exports.ChannelContainer = ChannelContainer;
