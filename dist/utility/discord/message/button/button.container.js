"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonContainer = void 0;
const discord_js_1 = require("discord.js");
const tuple_1 = require("../../../tuple");
class ButtonContainer {
    constructor(client) {
        this.client = client;
        this.buttons = new Map;
    }
    get(id) {
        if (this.buttons.has(id)) {
            return;
        }
        return this.buttons.get(id);
    }
    getAll() {
        return this.buttons;
    }
    build(options) {
        const button = new discord_js_1.ButtonBuilder()
            .setCustomId(options.id)
            .setLabel(options.label)
            .setStyle(options.style);
        this.buttons.set(options.id, new tuple_1.Tuple(options, button));
    }
    buildAll() {
        for (let [key] of this.buttons) {
            this.build(this.get(key).getFirst());
        }
    }
}
exports.ButtonContainer = ButtonContainer;
