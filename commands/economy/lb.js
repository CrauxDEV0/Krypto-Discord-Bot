const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
   name: "lb",
   aliases: ['rich'],
   category: 'economy',
   description: 'Shows Server\'s Top 10 Users of Economy Leaderboard',
   run: async (client, message, args) => {
        let money = db.all().filter(data => data.ID.startsWith(`money_`)).sort((a, b) => b.data - a.data);
        if (!money.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("BLACK")
                .setFooter("Nothing To See Here Yet!")
            return message.channel.send({embeds:[noEmbed]})
        };

        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            if (money[i].data === null) money[i].data = 0
            finalLb += `**${money.indexOf(money[i]) + 1}. ${client.users.cache.get(money[i].ID.split('_')[1]) ? client.users.cache.get(money[i].ID.split('_')[1]).tag : "Unknown User#0000"}** - ${money[i].data} /- <a:Money:927552113389756506> \n`;
        };

        const embed = new MessageEmbed()
            .setTitle(`Leaderboard Of ${message.guild.name}`)
            .setColor("BLACK")
            .setDescription(finalLb)
            .setFooter('@ Leaderboard / Economy')
            .setTimestamp()
        message.channel.send({embeds:[embed]});
    }
};
