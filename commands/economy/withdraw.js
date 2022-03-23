const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "withdraw",
  aliases: ["wd"],
  category: "economy",
  description: "Withdraws Money From Bank",
  usage: "<amount>",
  run: async (client, message, args) => {
        let user = message.author;

        let member2 = db.fetch(`bank_${user.id}`)

        if (args.join(' ').toLocaleLowerCase() == 'all') {
            let money = await db.fetch(`bank_${user.id}`)
            let embed = new MessageEmbed()
              .setColor("BLACK")
              .setDescription(`<a:Cross:916884830451548180> You don't have enough money to withdraw!`)
            if (!money) return message.channel.send({embeds:[embed]});
            db.subtract(`bank_${user.id}`, money)
            db.add(`money_${user.id}`, money)
            let embed5 = new MessageEmbed()
                .setColor("BLACK")
                .setDescription(`<a:tick:916884945555828806> You have withdrawn all your coins from your bank`); 
            message.channel.send({embeds:[embed5]})

        } else {

            let embed2 = new MessageEmbed() 
                .setColor("BLACK")
                .setDescription(`<a:info:918880832716955658> Specify an amount to withdraw!`);

            if (!args[0]) {
                return message.channel.send({embeds:[embed2]});
            }
            let embed6 = new MessageEmbed()
                .setColor("BLACK")
                .setDescription(`<a:Cross:916884830451548180> Your Amount Is Not A Number!`)

            if(isNaN(args[0])) {
                return message.channel.send({embeds:[embed6]});
            }
            let embed3 = new MessageEmbed()
                .setColor("BLACK")
                .setDescription(`<a:Cross:916884830451548180> You can't withdraw negative money!`);

            if (message.content.includes('-')) {
                return message.channel.send({embeds:[embed3]})
            }
            let embed4 = new MessageEmbed()
                .setColor("BLACK")
                .setDescription(`<a:Cross:916884830451548180> You don't have that much money in the bank!`);

            if (member2 < args[0]) {
                return message.channel.send({embeds:[embed4]});
            }

            let embed5 = new MessageEmbed()
                .setColor("BLACK")
                .setDescription(`<a:Money:927552113389756506> You have withdrawn ${args[0]} **Crypto Coins** from your bank!`);

            message.channel.send({embeds:[embed5]});
            db.subtract(`bank_${user.id}`, args[0])
            db.add(`money_${user.id}`, args[0])
        }
    }
}
