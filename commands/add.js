const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
      //Kanaal waar het in moet
      var category = "818865312300662784"
      //Kijken of de persoon permissions heeft
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("jj kan dit niet doen.");
      //Kijken of het in de juiste category is
      if(message.channel.parentID != category) return message.reply("Oeps, je bent in het verkeerde kanaal");
        //kijken of de Gebruiker is Meegegeven
      var AddUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
      if(!AddUser) return message.reply("Geen Gebruiker Meegegven");

      var embedPrompt = new discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Antwood Binnen 30 sec")
      .setDescription(`wil je ${AddUser} Toevoen?`);

    var embed = new discord.MessageEmbed()
      .setTitle("Gebruiker Toegevoegd")
      .setColor("GREEN")
      .setTimestamp()
      .addField("Toegevoegd gebruiker", `${AddUser}`)
      .addField("Persoon Toegevoegd door", message.author);

    message.channel.send(embedPrompt).then(async msg => {

      message.delete();

      var Emojis = await promptMessage(msg, message.author, 30 ["✅", "❌"]);

      if(emoji = ✅{

          msg.delete();


          message.channel.updateOverwrite(AddUser, {
              SEND_MESSAGES: true, 
              CREATE_INSTANT_INVITE: false,
              READ_MESSAGES: true,
              ATTACH_FILES: true,
              ADD_REACTIONS: true,
              CONNECT: true,
              READ_MESSAGES_HISTORY: true,
              VIEW_CHANNEL: true,






          })

      }

    })
}
// Emojis aan teksten kopellen.
async function promptMessage(message, author, time, reactions) {
  // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
  time *= 1000;

  // We gaan ieder meegegeven reactie onder de reactie plaatsen.
  for (const reaction of reactions) {
      await message.react(reaction);
  }

  // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
  // dan kunnen we een bericht terug sturen.
  const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

  // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
  // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
  return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.help = {
    name: "add",
    description: "Voeg een persoon Bij een ticket",
    category: "Ticket"
}