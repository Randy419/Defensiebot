const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   var categoryID = "775752828848570378"

   if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("JJ Bent geen Staff Dus Jj mag dit niet doen")
    

     return message.channel.send("hallo, Hoe Gaat het Met Jouw?");
}

module.exports.help = {
    name: "add",
    description: "Voeg een persoon Bij een ticket",
    category: "Ticket"
}