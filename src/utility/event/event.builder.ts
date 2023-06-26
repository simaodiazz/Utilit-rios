import { modules } from "../event/event.container";

export class EventBuilder {

    constructor() { }

    init(event: string, func: Function) {
        if (event === undefined || null || 0) {
            throw new Error("O evento não pode ser vazio, undefined ou null");
        }

        if (modules.has(event)) {
            modules.get(event)?.push(func)
        } else {
            const functions: Function[] = []
            functions.push(func)
            modules.set(event, functions)
        }
    }
}