const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("Goedendag. ${message.author.username} Heeft het ticket geclaim als iemand anders hierin praat warn");
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Je hebt geen toestemming om dit te doen.");
}

module.exports.help = {
    name: "claim",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}