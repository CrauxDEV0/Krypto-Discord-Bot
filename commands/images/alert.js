const discord = require('discord.js');

module.exports = {
    name:'alert',
    run:async(client, message, args) => {
     const er = new discord.MessageEmbed()
     er.setDescription(`**<a:Cross:916884830451548180> Usage: c!alert **`)
     er.setColor('#f50213');
     
     //second EMBED
     const abc = new discord.MessageEmbed()
     abc.setDescription(`**<a:Cross:916884830451548180> You are not allowed to go over 65 Characters**`)
     abc.setColor('#f50213');

     //statement 1
     if (!args[0]) {
         return message.channel.send({embeds:[er]});
        }
    // statement 2
        let alertMessage = args.slice(0).join(' ');
        if (alertMessage.length > 65) return message.channel.send({embeds:[abc]});
    
        message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/alert?text=${alertMessage}`, name: 'reaperalert.jpg' }] });
    }
}
