const Discord = require("discord.js")

module.exports = {
    name: "imagine",
    description: "Eu criou uma imagem para você.",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [{
        name: "prompt",
        description: "Coloque aqui o seu prompt para que eu crie uma imagem.",
        type: Discord.ApplicationCommandOptionType.String,
        required: true,
    }],

    run: async (client, interaction) => {

        let prompt = interaction.options.getString("prompt")

        console.log("a")
        interaction.reply({ content: `:x: **|** Seu prompt foi: \`${prompt}\`, mas eu ainda não consigo gerar imagens.` })
    }
}