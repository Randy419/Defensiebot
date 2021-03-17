const discord = require("discord.js");
const fetch  = require("node-fetch");

module.exports.run = async (client, message, args) => {
    
    fetch('https://www.reddit.com/r/memes/random.json').then(resp => resp.json()).then(respomgevormd => {
        var permalink = respomgevormd[0].data.children.data.permalink;
        var memeurl = `https://www.reddit.com${permalink}`;
        var memeFoto = respomgevormd[0].data.children.data.url;
        var memeTittel  = respomgevormd[0].data.children.data.title;

        var embed = discord.Messageembed()
        .setTitle(`${memeTittel}`)
        .setUrl(`${memeurl}`)
        .setImage(`${MemeFoto}`)
        .setcoler('RAMDOM');

        message.channel.send(embed);
    }).catch("error", (err) => {
        console.log(err.message);
    })

}

module.exports.help = {
    name: "meme",
    description: "MEMS!",
    category: "Informatie"
}