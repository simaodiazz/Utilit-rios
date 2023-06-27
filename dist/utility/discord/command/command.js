"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const main_1 = require("../../../app/main");
function Command() {
    return function (target) {
        main_1.Main.getInstance().getCommandContainer().getAll().set(target.prototype.build().name, target);
    };
}
exports.Command = Command;
