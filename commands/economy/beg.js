const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = module.require("ms");

module.exports = {
 name: "beg",
 category: "economy",
 description: "Beg for money",
 accessableby: "everyone",
 run: async (client, message, args) => {
        let user = message.author;

        let timeout = 120000;
        let amount = 50;

        let beg = await db.fetch(`beg_${user.id}`);

        if (beg !== null && timeout - (Date.now() - beg) > 0) {
            let time = ms(timeout - (Date.now() - beg));

            let timeEmbed = new MessageEmbed()
                .setColor("BLACK")
                .setDescription(`<a:tick:916884945555828806> You've already **begged** recently`);
            message.channel.send({embeds:[timeEmbed]})
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("BLACK")
                .setDescription(`<a:Money:927552113389756506> You've **begged** and received ${amount} **Crypto Coins**!`);
            message.channel.send({embeds:[moneyEmbed]})
            db.add(`money_${user.id}`, amount)
            db.add(`begs_${user.id}`, 1)
            db.set(`beg_${user.id}`, Date.now())


        }
    }
};
