const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("ERROR! Kan geen Commando Vinden");

}

module.exports.help = {
    name: "Ruben",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}