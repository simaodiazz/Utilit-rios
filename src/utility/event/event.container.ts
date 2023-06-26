import { Client } from "discord.js"

export const modules: Map<String, Function[]> = new Map<String, Function[]>()

export class EventContainer {

    constructor(client: Client) {

        for (let [key, value] of modules) {

            value.forEach(module => client.on(key as string, interaction => module.prototype.execute(interaction)))
        
        }
    }
}
