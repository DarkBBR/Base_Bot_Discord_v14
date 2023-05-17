const fs = require("fs")

module.exports = async (client) => {

    const SlashsArray = []

    fs.readdir(`././commands/`, (erro, pasta) => {
        pasta.forEach(subpasta => {
            fs.readdir(`././commands/${subpasta}/`, (erro, arquivos) => {
                arquivos.forEach(arquivo => {
                    if (!arquivo?.endsWith('.js')) return
                    arquivo = require(`../commands/${subpasta}/${arquivo}`)
                    if (!arquivo?.name) return
                    client.slashCommands.set(arquivo?.name, arquivo)
                    SlashsArray.push(arquivo)
                })
            })
        })
    })

    client.on("ready", async () => {
        client.application.commands.set(SlashsArray)
    })

    fs.readdir(`././events/`, (erro, pasta) => {
        pasta.forEach(subpasta => {
            fs.readdir(`././events/${subpasta}/`, (erro, arquivos) => {
                arquivos.forEach(arquivo => {
                    if (!arquivo.endsWith('.js')) return; require(`../events/${subpasta}/${arquivo}`)
                })
            })
        })
    })
}