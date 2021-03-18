const discord = require("discord.js");
const fetch = require("node-fetch");
module.exports.run = async (client, message, args) => {

fetch('https://www.reddit.com/r/memes/random/.json').then(resp => resp.json()).then(respOmgevormd => {
    
    var permalink = respOmgevormd[0].data.children[0].data.permaLink;
    var MemeURL = `https://www.reddit.com${permalink}`;
    var memeFoto = respOmgevormd[0].data.children[0].data.url;
    var MemeTitle = respOmgevormd[0].data.children[0].data.title;

    var embed = new discord.MessageEmbed()
        .setTitle(`${MemeTitle}`)
        .setURL(`${MemeURL}`)
        .setImage(`${memeFoto}`)
        .setColor(`RANDOM`);

        message.channel.send(embed)
}).catch("error", (err) => {
    console.log(err.messge);
})

}

module.exports.help = {
    name: "meme",
    description: "dit is een Mem commando",
    category: "Algemeen"
}