const { MessageEmbed } = require('discord.js');

module.exports = {
    name:'invite',
    description:'get the author invite link of the bot',
    run:async(client, message, args) => {
        const embed = new MessageEmbed()
         .setDescription(`Generating invite link for you!`)
         .setColor('BLACK')

        const embed1 = new MessageEmbed()
         .setDescription(`**Hey there! How you doing? Want to invite me to your server? [Click Here](https://discord.com/api/oauth2/authorize?client_id=903559778914152458&permissions=8&scope=bot) to add me to your server!**`)
         .setColor("BLACK")

         message.channel.send({embeds:[embed1]});
    }
}
