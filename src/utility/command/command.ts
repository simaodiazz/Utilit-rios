import { modules } from './command.container'

export function Command() {
    return function(target: Function) {
        modules.push(target)
    }
}
