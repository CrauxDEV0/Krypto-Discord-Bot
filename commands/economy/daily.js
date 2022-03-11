const { MessageEmbed } = require('discord.js');
const ms = require('ms');
const db = require('quick.db');

module.exports = {
    name:'daily',
    description:'Gain daily free coins',
    run:async(client, message, args) => {
        let user = message.author;
        let timeout = 86400000;
        let amount = 200;

        let daily = await db.fetch(`daily_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            let timeEmbed = new MessageEmbed()
                .setColor("BLACK")
                .setDescription(`<a:Cross:916884830451548180> You've already collected your daily reward!`);
            message.channel.send({embeds:[timeEmbed]});
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("BLACK")
                .setDescription(`<a:Money:927552113389756506> You've collected your daily reward of ${amount} coins`);
            message.channel.send({embeds:[moneyEmbed]});
            db.add(`money_${user.id}`, amount)
            db.set(`daily_${user.id}`, Date.now())


        }
    }
}
