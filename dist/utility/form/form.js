"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
class Form {
    constructor(questions, options) {
        this.questions = questions;
        this.responses = [];
        this.options = options;
    }
    start(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let question of this.questions) {
                try {
                    yield this.send(channel, question);
                    const response = yield this.question(channel);
                    this.responses.push((response === null || response === void 0 ? void 0 : response.content) || "");
                }
                catch (error) {
                    console.log(error);
                }
            }
            channel.send('Formúlario concluido.');
        });
    }
    send(channel, question) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield channel.send(question);
        });
    }
    question(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            const collected = yield channel.awaitMessages(this.options);
            return collected.first();
        });
    }
}
exports.Form = Form;
