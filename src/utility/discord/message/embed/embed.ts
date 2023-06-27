import { Main } from "../../../../app/main";
import { EmbedOptions } from "./embed.options";

export function Embed(options: EmbedOptions) {
    return function(target: Function) {
        Main.getInstance().getEmbedContainer().build(options.id, options)
    }
}