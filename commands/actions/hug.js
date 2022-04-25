const { MessageEmbed } = require("discord.js")

module.exports = {
 name:'hug',
 description:'Hug a user',
 usage:'c!hug <@mention>',
 run:async(client, message, args) => {
     const embed1 = new MessageEmbed()
     embed1.setDescription(`<a:Cross:916884830451548180> Mention a user!`)
     embed1.setColor("BLACK")

     const user = message.mentions.users.first() || client.users.cache.get(args[0])
     
     if(!user) {
         return message.channel.send({embeds:[embed1]});
     }

     var msg = [

     ]
     var gif = [

     ]
    const embed2 = new MessageEmbed()
    embed2.setTitle(msg[Math.floor(Math.random() * 2 )]) 
    embed2.setDescription(`${message.member} hugged ${user} !`)
    embed2.setFooter('@ Action/Hug')
    embed2.setImage(gif[Math.floor(Math.random() * 2)])
    embed2.setTimestamp()
    embed2.setColor("BLACK")
    
    if (user){
     return message.channel.send({embeds:[embed2]})
    }
 }
}
