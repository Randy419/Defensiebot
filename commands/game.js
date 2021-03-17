const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("https://www.roblox.com/games/5744502904/Den-hoorn-V1-BETA?refPageId=bfe34ce6-8689-4eb7-ab60-0dfab0cfa0c7");

}

module.exports.help = {
    name: "game",
    description: "geef de Game weer",
    category: "Informatie"
}