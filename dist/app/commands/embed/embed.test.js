"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedTest = void 0;
const embed_1 = require("../../../utility/discord/message/embed/embed");
let EmbedTest = exports.EmbedTest = class EmbedTest {
};
exports.EmbedTest = EmbedTest = __decorate([
    (0, embed_1.Embed)({
        id: 'embed-test',
        author: {
            name: 'simaodiazz'
        },
        color: "#ffff00",
        title: "",
        description: "Experimento",
        footer: {
            text: "Exemplo de footer"
        },
        timestamp: true,
    })
], EmbedTest);
