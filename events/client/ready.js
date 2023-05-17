const client = require("../../index.js")

client.on("ready", async (client) => {
    console.log(`${client.user.tag} ligado com sucesso!`)
    client.user.setStatus("online")
})
