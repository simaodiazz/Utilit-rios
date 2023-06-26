import { modules } from "./event.container";

export function Listener(event: string) {

    return function(target: Function) {

        if (event.length === 0 || event === undefined || event === null) {
            throw new Error("O evento não pode ser vazio, undefined ou null");
        }

        if (modules.has(event)) {
            modules.get(event)?.push(target)
        } else {
            const functions: Function[] = []
            functions.push(target)
            modules.set(event, functions)
        }
    }
}