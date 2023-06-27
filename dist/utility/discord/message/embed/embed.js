"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embed = void 0;
const main_1 = require("../../../../app/main");
function Embed(options) {
    return function (target) {
        main_1.Main.getInstance().getEmbedContainer().build(options.id, options);
    };
}
exports.Embed = Embed;
