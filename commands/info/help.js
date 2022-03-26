const discord = require('discord.js');
const prefix = process.env.PREFIX;
module.exports = {
  name:'help',
  usage:`${prefix}help`,
  run:async(client, message, args) => {

   let embed2 = new discord.MessageEmbed()
   embed2.setTitle(`<:commands:917224510057480212> Help Commands`)
   embed2.setDescription('')
   embed2.addField(`<:smile:948281673273995345> Fun commands`,'`avatar`,`8ball`,`hack`,`sanitize`',true)
   embed2.addField(`<:image:948279032934461500> Image Commands`,'`clyde`,`alert`', true)
   embed2.addField(`<a:Gamer:949746159956656128> Game Commands`,'`rps`',true)
   embed2.addField(`<a:Money:927552113389756506>  Economy Commands`,'`bal`,`daily`,`beg`,`lb`,`send,`withdraw`',true)
   embed2.addField(`<a:info:918880832716955658> Info Commands`,'`ping`,`help`,`botstats`,`invite`',true)
   embed2.addField(` Beta Features`,'`Moderation commands`', true)
   embed2.setFooter('@ Help')
   embed2.setColor('BLACK')
   embed2.setTimestamp();
   
   
   message.channel.send({embeds:[embed2]});

  }
}
