const { MessageEmbed } = require("discord.js")

module.exports = {
 name:'slap',
 description:'Slap a user',
 usage:'c!slap <@mention>',
 run:async(client, message, args) => {
     const embed1 = new MessageEmbed()
     embed1.setDescription(`<a:Cross:916884830451548180> Mention a user!`)
     embed1.setColor("BLACK")

     const user = message.mentions.users.first() || client.users.cache.get(args[0])
     
     if(!user) {
         return message.channel.send({embeds:[embed1]});
     }

     var msg = [
        `<:ouch:968185278525235210> It hurts! `,
        `<:ouch:968185278525235210>  Ouch! It hurts much!`,
        `<:AngryAnime:968185145658060840> How dare you to slap me?`
     ]
     var gif = [
         `https://c.tenor.com/UDo0WPttiRsAAAAd/bunny-girl-slap.gif`,
         `https://c.tenor.com/yJmrNruFNtEAAAAM/slap.gif`,
         `https://c.tenor.com/OuYAPinRFYgAAAAM/anime-slap.gif`,
         `https://c.tenor.com/klNTzZNDmEgAAAAM/slap-hit.gif`,
         `https://c.tenor.com/XiYuU9h44-AAAAAM/anime-slap-mad.gif`,
         `https://c.tenor.com/5eI0koENMAAAAAAM/anime-hit.gif`
     ]
    const embed2 = new MessageEmbed()
    embed2.setTitle(msg[Math.floor(Math.random() * 2 )]) 
    embed2.setDescription(`${message.member} slapped ${user} !`)
    embed2.setFooter('@ Action/Slap')
    embed2.setImage(gif[Math.floor(Math.random() * 2)])
    embed2.setTimestamp()
    embed2.setColor("BLACK")
    
    if (user){
     return message.channel.send({embeds:[embed2]})
    }
 }
}
