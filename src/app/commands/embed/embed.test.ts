import { Embed } from "../../../utility/discord/message/embed/embed";

@Embed(
    {
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
    }
)
export class EmbedTest { }
