const { MessageEmbed } = require('discord.js');

module.exports = {
    name:'ping',
    description:'get the user the ping of the bot',
    run:async(client, message, args) => {
        const latency = `\`\`\`ini\n[ ${client.ws.ping}ms ]\`\`\``;

        let embed = new MessageEmbed()
        embed.setTitle('Pong!')
        embed.setDescription('')
        embed.addField('Latency', latency, true)
        embed.setThumbnail("https://media.discordapp.net/attachments/747094092596510841/767079159977082910/2102a19ea556e1d1c54f40a3eda0d775.gif")
        embed.setColor('BLACK')
        embed.setFooter('@ Ping/Server')
        embed.setTimestamp()
        
        message.channel.send({embeds:[embed]});
    }
}
