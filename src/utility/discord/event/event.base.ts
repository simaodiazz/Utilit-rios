import { CommandInteraction, Interaction, Message } from "discord.js"

export interface BaseEvent {

    execute?(interaction: Interaction): void
    execute?(message: Message): void
    execute?(CommandInteraction: CommandInteraction): void
    
}