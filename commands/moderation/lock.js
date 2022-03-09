const { Permissions } = require('discord.js');

module.exports ={
    name:'lock',
    run:async(client, message, args) => {
    const embed1 = new discord.MessageEmbed()
    embed1.setDescription(`**<a:Cross:916884830451548180> Missing Permission(You dont have permission) **`)
    embed1.setColor('#f50213')

    const embed2 = new discord.MessageEmbed()
    embed2.setDescription(`**<a:tick:916884945555828806> Locked down the channel`)
    embed2.setColor("GREEN")

    if(!message.member.permissions.has("MANAGE_CHANNEL")){
        return message.channel.send({embeds:[embed1]});
    }
   message.channel.permissionsOverwrites.edit(message.guild.everyone.id, {
          SEND_MESSAGES: false,
    });

    await message.channel.send({embeds:[embed2]});
    }
}
