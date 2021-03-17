
module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");
    
    await message.channel.overwritePermissions([

        {
            id: message.guild.roles.cache.find(r => r.name == "@everyone").id,
            deny: ['SEND_MESSAGES']
        }

    ]);
message.channel.send(`Het stafflid: ${message.author} Heeft dit kanaal in lockdown gedaan.`)

}

module.exports.help = {
    name: "lockdown",
    description: "Doet het Kanaal In lockdown",
    category: "Informatie"
}