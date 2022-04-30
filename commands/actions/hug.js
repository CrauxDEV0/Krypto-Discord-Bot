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
     `Hug me tightly`,
     `<a:AnimeHug:968715028641488938> Dont be sad dear!`
     ]
     var gif = [
     `https://tenor.com/view/hug-gif-24003809`,
     `https://tenor.com/view/hug-cuddle-gif-23284815`,
     ]
    const embed2 = new MessageEmbed()
    embed2.setTitle(msg[Math.floor(Math.random() * msg.length)]) 
    embed2.setDescription(`${message.member} hugged ${user} !`)
    embed2.setImage(gif[Math.floor(Math.random() * gif.length)])
    embed2.setFooter('@ Action/Hug')
    embed2.setTimestamp()
    embed2.setColor("BLACK")
    
    if (user){
     return message.channel.send({embeds:[embed2]})
    }
 }
}
