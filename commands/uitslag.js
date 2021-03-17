const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	
     const categoryID = "775792261031133204";
     
   var parentID = message.channel.parent.id = "753327873208746154"
   
   message.channel.parent.id = "753327873208746154"
   
   var TicketUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  
		
if (message.channel.parentID !== categoryID) return message.reply("Oeps, dit is niet in een ticket") && message.delete();
			
if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Jij kan dit niet doen") && message.delete();

if(!TicketUser) return message.reply("Geef een persoon op") && message.delete();

		var kiesEmbed = new discord.MessageEmbed()
        .setTitle("Kies")
        .setColor("#00BFFF")
        .addField(`Aangenomen:`, `:) `, false)
        .addField(`Afgewezen:`, `❌`, false)
		
		var redenEmbed = new discord.MessageEmbed()
        .setTitle("Kies")
        .setColor("#00BFFF")
        .addField(`Reden`, `vertel een reden`, false)

		
		     const filter2 = m => m.content;
		
		message.channel.send(kiesEmbed).then(async msg => {
			
			message.delete();

        var emoji = await promptMessage(msg, message.author, 60, ["✅", "❌"]);

        if (emoji === "✅") {

            message.channel.send(redenEmbed).then (msg => msg.delete({ timeout: 10000 }));
			
			        message.channel.awaitMessages(filter2,
                { max: 1, time: 10000 }).then(collected => {
                    let reden2 = collected.first();
                    
                var antwoord1 = new discord.MessageEmbed()
                .setTitle("Aangenomen")
                .setColor("#00ff00")
                .addField("Wie:", `${TicketUser}`, false)
	        	.addField("Reden:", `${reden2}`, false)

                   message.channel.send(antwoord1);
                        message.channel.bulkDelete(1)
                        message.channel.setTopic(`**Sollicitant**: ${TicketUser} **Status**: Aangenomen!`)
                  
    
                })
                

        } else if (emoji === "❌") {

            message.delete();

            message.channel.send(redenEmbed).then (msg => msg.delete({ timeout: 10000 }));
			
				message.channel.awaitMessages(filter2,
                { max: 1, time: 10000 }).then(collected => {
                    let reden1 = collected.first();
                    
                    		var antwoord2 = new discord.MessageEmbed()
                             .setTitle("Afgewezen")
                            .setColor("#ff0000")
                            .addField("Wie:", `${TicketUser}`, false)
	                        .addField("Reden:", `${reden1}`, false)

                            
                    message.channel.send(antwoord2);
                                message.channel.bulkDelete(1)
                        message.channel.setTopic(`**Sollicitant**: ${TicketUser} **Status**: Afgewezen!`)
                

                })
        }

    });
    
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

    message.channel.delete();
}
	
 	
			
module.exports.help = {
  name:"uitslag"
}