import { listener, Module, applicationCommand } from '@pikokr/command.ts'
import { Client } from '../structures/client'
import { CommandInteraction } from 'discord.js'

class Hello extends Module {
    constructor(private cts: Client) {
        super()
    }

    @applicationCommand({
        command: {
            type: 'CHAT_INPUT',
            name: 'test',
            description: '호애애',
        },
    })
    async test(i: CommandInteraction) {
        await i.reply({
            content: '호애애애애 -ㅅ-',
            ephemeral: true,
        })
    }

    @listener('ready')
    ready() {
        this.logger.info(`Logged in as ${this.cts.client.user!.tag}`)
    }
}

export function install(cts: Client) {
    return new Hello(cts)
}
