import { Main } from "../../../app/main"

export function Command() {
    return function(target: Function) {
        Main.getInstance().getCommandContainer().getAll().set(target.prototype.build().name, target)
    }
}
