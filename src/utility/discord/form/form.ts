import { AwaitMessagesOptions, MessageCreateOptions, TextChannel } from "discord.js"

export class Form {

    private questions: MessageCreateOptions[]
    private responses: string[]
    private options: AwaitMessagesOptions

    constructor(questions: MessageCreateOptions[], options: AwaitMessagesOptions) {
        this.questions = questions
        this.responses = []
        this.options = options
    }

    async start(channel: TextChannel): Promise<void> {
        for (let question of this.questions) {
            try {
                await this.send(channel, question)
                const response = await this.question(channel)
                this.responses.push(response?.content || "")
            } catch (error) { 
                console.log(error) 
            }
        }
        channel.send('Formúlario concluido.')
    }

    async send(channel: TextChannel, question: MessageCreateOptions) {
        return await channel.send(question)
    }

    async question(channel: TextChannel) {
        const collected = await channel.awaitMessages(this.options)
        return collected.first()
    }

    getResponses() {
        return this.responses
    }

    getQuestions() {
        return this.questions
    }

    getOptions() {
        return this.options
    }
}