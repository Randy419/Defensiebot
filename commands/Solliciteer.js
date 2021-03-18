const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    var categoryID = "822156156276310046";
    
    var userName = message.author.username;
    
    var userDisciminator = message.author.discriminator;
    
    var persoon = "775792261031133204-"+message.author.username;
    
    var staff = "818863215479488532"
    
    var TicketBestaat = false;
    
    var persoon2 = message.author
    
    message.guild.channels.cache.forEach(channel => {
        
        if (channel.name === persoon) {
            
            message.reply("Je hebt al een ticket aangemaakt");
            
            return;
        }
});
    
    
    if(TicketBestaat) return;
    
    var embed = new discord.MessageEmbed()
    .setTitle("hoi " + message.author.username)
    .setColor("#00BFFF")
    .setFooter("sollicitatie kanaal word aangemaakt");
    
    message.delete();
    
message.channel.send(embed).then (msg => msg.delete({ timeout: 3000 }));

message.guild.channels.create(persoon, {type: 'text'}).then(
(createdChannel) => {
createdChannel.setParent(categoryID).then(
(settedParent) => {
    
    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false
        });
        
    settedParent.updateOverwrite(message.author.id, {
        SEND_MESSAGES: true,
        CREATE_INSTANT_INVITE: false,
        READ_MESSAGES: true,
        ATTACH_FILES: true,
        ADD_REACTIONS: true,
        CONNECT: true,
        READ_MESSAGE_HISTORY: true,
        VIEW_CHANNEL: true
        });
        

    settedParent.updateOverwrite(message.guild.roles.cache.get(staff), {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
        READ_MESSAGES: true,
        READ_MESSAGE_HISTORY: true
        });

//hier begint het echt
    
        var embedParent = new discord.MessageEmbed()
            .setTitle("Haii, " + message.author.username)
            .setColor("#00BFFF")
            .setDescription(`Dit is u sollicitaie, vul deze maar rustig in`)


            
        var vraag1 = new discord.MessageEmbed()
        .setTitle("Sollicitatie Den Hoorn: vraag 1")
        .setColor("#00BFFF")
        .setDescription("Wie ben je?, Welke Eenheid")


        
        var vraag2 = new discord.MessageEmbed()
        .setTitle("Sollicitatie Den Hoorn: Vraag 2")
        .setColor("#00BFFF")
        .setDescription("Waarom wil je staff worden?")

        
        var vraag3 = new discord.MessageEmbed()
        .setTitle("Sollicitatie Den Hoorn: Vraag 3")
        .setColor("#00BFFF")
        .setDescription("Waarom ben je anders dan de andere sollicitanten?")

        
        var vraag4 = new discord.MessageEmbed()
        .setTitle("Sollicitatie Den Hoorn: Vraag 4")
        .setColor("#00BFFF")
        .setDescription("Wat voor ervaring heb je?")

        
        var vraag5 = new discord.MessageEmbed()
        .setTitle("Sollicitatie Den Hoorn: Vraag 5")
        .setColor("#00BFFF")
        .setDescription("Wat zijn je plus punten?")

        
        var vraag6 = new discord.MessageEmbed()
        .setTitle("Sollicitatie Den Hoorn: Vraag 6")
        .setColor("#00BFFF")
        .setDescription("Wat zijn je min punten?")

        
        var vraag7 = new discord.MessageEmbed()
        .setTitle("Sollicitatie Den Hoorn: Vraag 7")
        .setColor("#00BFFF")
        .setDescription("Wil je nog wat zeggen?")
        



            settedParent.send(message.author.id)
            settedParent.send(embedParent);
            settedParent.send(vraag1);
            settedParent.awaitMessages(s => s.author.id == message.author.id,
                { max: 1 }).then(collected => {
                    let antwoord1 = collected.first();
                    settedParent.send(vraag2);
            settedParent.awaitMessages(s => s.author.id == message.author.id,
                        { max: 1 }).then(collected => {
                            let antwoord2 = collected.first();
                            settedParent.send(vraag3);
            settedParent.awaitMessages(s => s.author.id == message.author.id,
                { max: 1 }).then(collected => {
                    let antwoord3 = collected.first();
                    settedParent.send(vraag4);
            settedParent.awaitMessages(s => s.author.id == message.author.id,
                        { max: 1 }).then(collected => {
                            let antwoord4 = collected.first();
                            settedParent.send(vraag5);
            settedParent.awaitMessages(s => s.author.id == message.author.id,
                        { max: 1 }).then(collected => {
                            let antwoord5 = collected.first();
                            settedParent.send(vraag6);
            settedParent.awaitMessages(s => s.author.id == message.author.id,
                        { max: 1 }).then(collected => {
                            let antwoord6 = collected.first();
                            settedParent.send(vraag7);
            settedParent.awaitMessages(s => s.author.id == message.author.id,
                                { max: 1 }).then(collected => {
                                    let antwoord7 = collected.first();
                                    var uitkomst = new discord.MessageEmbed()
                                    .setTitle("Bedankt voor het solliciteren!")
                                    .setColor("00ff00")
                                    .setTimestamp()
                                    .setFooter("Den Hoorn © 2020")
                                    .setDescription(`**Vraag 1:** \n${antwoord1}\n\n**Vraag 2:** \n${antwoord2}\n\n**Vraag 3:**\n${antwoord3}\n\n**Vraag 4:** \n${antwoord4}\n\n**Vraag 5:** \n${antwoord6}\n\n**Vraag 6:**\n${antwoord6}\n\n**Vraag 7:**\n${antwoord7}`);
                                    settedParent.bulkDelete(6).then(
                                        settedParent.send(uitkomst)
                                    )
                                        
                                    })
                

                                })
        
                        })
                })
                })
                        })
                })
                
settedParent.send(`<@${persoon2}>, <@&${staff}>`).then (msg => msg.delete({ timeout: 1000 }))
           
}
).catch(err => {
    message.channel.send("oeps, er is iets misgelopen");
    });
    

    
})



}


module.exports.help = {
    name: "solliciteer",
    description: "Solliciteer met dit commando",
    category: "Informatie"
}