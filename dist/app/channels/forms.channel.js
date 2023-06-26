"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormsChannel = void 0;
const discord_js_1 = require("discord.js");
const channel_1 = require("../../utility/channel/channel");
let FormsChannel = exports.FormsChannel = class FormsChannel {
};
exports.FormsChannel = FormsChannel = __decorate([
    (0, channel_1.Channel)({
        id: "formsChannel",
        name: "forms-channel",
        type: discord_js_1.ChannelType.GuildText
    })
], FormsChannel);
