const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    if(!message.member.Haspermission("MANAGE_SERVER")) return message.reply("Geen Toegang tot dat commando");
    
    if(!args[0]) return message.reply("Gebruik prefix <Nieuwe Prefix>");

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    prefixes[message.guild.id] = {
        prefix: args[0]
    };

    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), err => {
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
    .setTitle("Prefix is Veranderd")
    .setColor("RANDOM")
    .setDescription(`heeft de prefix veranderd naar ${args[0]}.`);


message.channel.send(embed);
    

}

module.exports.help = {
    name: "prefix",
    description: "verander de prefix",
    category: "Informatie"
}