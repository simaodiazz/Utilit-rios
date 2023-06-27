import { ButtonBuilder, Client } from "discord.js";
import { Tuple } from "../../../tuple";
import { ButtonOptions } from "./button.options";

export class ButtonContainer {

    private client: Client
    private buttons: Map<String, Tuple<ButtonOptions, ButtonBuilder>>

    constructor(client: Client) {
        this.client = client
        this.buttons = new Map<String, Tuple<ButtonOptions, ButtonBuilder>>
    }

    get(id: string) {
        if (this.buttons.has(id)) {
            return;
        }
        return this.buttons.get(id)
    }

    getAll() {
        return this.buttons
    }

    build(options: ButtonOptions) {
        const button = new ButtonBuilder()
            .setCustomId(options.id)
            .setLabel(options.label)
            .setStyle(options.style)

        this.buttons.set(options.id, new Tuple<ButtonOptions, ButtonBuilder>(options, button))
    }

    buildAll() {
        for (let [key] of this.buttons) {
            this.build(this.get(key as string).getFirst())
        }
    }
}
