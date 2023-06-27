import { Client } from "discord.js"

export class EventContainer {

    private client: Client
    private events: Map<string, Function[]>;

    constructor(client: Client) {
        this.client = client
        this.events = new Map<string, Function[]>()
    }

    get(id: string) {
        return this.events.get(id)
    }

    getAll() {
        return this.events
    }

    build(eventName: string, func: Function) {
        if (event === undefined || null || 0) {
            throw new Error("O evento não pode ser vazio, undefined ou null");
        }

        if (this.events.has(eventName)) {
            this.events.get(eventName)?.push(func)
        } else {
            this.events.set(eventName, [ func ])
        }

        this.client.on(eventName, event => func.prototype.execute(event))
    }

    buildAll() {
        for (let [key, values] of this.events) {
            for (let value of values) {
                this.build(key, value)
            }
        }
    }
}
