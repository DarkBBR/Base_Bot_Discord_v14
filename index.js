// Modulos
const { Client, GatewayIntentBits, Collection } = require("discord.js")
const { token } = require("./security/config.json")

// Intents para o menos entendidos
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
    ]
})

module.exports = client

client.slashCommands = new Collection()

require("./handler")(client)

client.login(token)
