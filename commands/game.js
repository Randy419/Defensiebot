const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("https://www.roblox.com/games/6461481202/NL-The-Netherlands?refPageId=578c8551-14b0-458b-86f0-6794c71bb998");

}

module.exports.help = {
    name: "game",
    description: "geef de Game weer",
    category: "Informatie"
}