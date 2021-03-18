const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("ADMINISTRATOR");

    var user = message.guild.member(message.mentions.user.first());
    if (!user) return message.reply("Geen gebruiker gevonden");

    var role = message.guild.roles.cache.find(r => r.name ==="Staff team");
    if (!role) return message.reply("Geen rol met deze naam Gevonden");

    var Foutembed = new discord.MessageEmbed()
        .setTitle("Deze Persoon is al admin")
        .setColor("ff0000")
        .setDescription("ik denk dat je een foutje hebt Gemaakt");

    var embed = new discord.MessageEmbed()
        .setTitle("****AanPassing****")
        .setColor("ff0000")
        .setDescription("Rol Aanpassing", `${user.user.username} heeft de rol ${role} Gekregen en is nu admin`);

    if (user.roles.cache.find(r => r.name === role.name)) {
        return message.reply(Foutembed);
    }

    user.roles.add(role.id) && message.channel.send(embed);
}

module.exports.help = {
    name: "staff",
    description: "maak iemand staff",
    category: "Informatie"
}