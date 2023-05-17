const client = require("../../kyou.js")
const Discord = require("discord.js")

client.on("interactionCreate", interaction => {
    if (interaction.type === Discord.InteractionType.ApplicationCommand) {

        const cmd = client.slashCommands.get(interaction.commandName)

        if (interaction.channel.type === Discord.ChannelType.DM) return interaction.reply({ content: `Você só pode usar os comandos em um servidor.`, ephemeral: true })

        interaction["member"] = interaction.guild.members.cache.get(interaction.user.id)

        cmd.run(client, interaction)
    }
})