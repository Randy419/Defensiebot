const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Welkom Bij Defensie')
            .setDescription("In deze Embed Vind je Informatie")
            .setColor("#0099ff")
            .addField("Bot:", client.user.username)

            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Alle commands? !help', 'https://i.imgur.com/wSTFkRM.png');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}