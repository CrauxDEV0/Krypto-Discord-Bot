const { MessageEmbed } = require('discord.js');
const { Permissions } = require('discord.js');
module.exports = {
 name:'dm',
 description:'dm a user',
 aliases: ['dm'],
 usage: "dm <@mention> <msg>",
 userPerms: ["MANAGE_GUILD"],
 run:async(client, message, args) => {

     if (!args[0]) {
         let embed1 = new MessageEmbed();
         embed1.setDescription(`<a:Cross:916884830451548180> Usage: ||c!dm <@user> <text>|| `)
         embed1.setColor("BLACK")
         
         return message.channel.send({embeds: [embed1]})
     }

     const user = message.mentions.users.first();
     const text = args.slice(1).join(" "); 

     if (!user) {
         let embed2 = new MessageEmbed()
         embed2.setDescription(`<a:Cross:916884830451548180> Usage: ||c!dm <@mention> <msg>|| `)
         embed2.setColor("BLACK")
         return message.channel.send({embeds: [embed2]})
     }

     if (!text) {
         let embed3 = new MessageEmbed()
         embed3.setDescription(`<a:Cross:916884830451548180> Usage: ||c!dm <@mention> <user>|| `)
         embed3.setColor("BLACK")
         return message.channel.send({embeds: [embed3]})
     }
     let embed4 = new MessageEmbed()
     embed4.setTitle(`Hey User <a:hii:749318622446485610> `)
     embed4.setDescription(`${text}`)
     embed4.setFooter('Direct Message through this bot!')
     embed4.setTimestamp()
     user.send({embeds: [embed4]})
    }
}
