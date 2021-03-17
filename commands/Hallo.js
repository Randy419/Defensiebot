const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("hallo, Hoe Gaat het Met Jouw?");

}

module.exports.help = {
    name: "hallo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}