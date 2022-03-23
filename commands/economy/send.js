const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
 name: "send",
 noalias: [""],
 category: "economy",
 description: "send crypto coins to Somebody",
 usage: "[mention | ID] <amount>",
 accessableby: "everyone",
 run: async (client, message, args) => {
      const embed9  = new MessageEmbed()
      .setDescription(`<a:Cross:916884830451548180> Please enter a user!`)
      .setColor("BLACK");
//second emmbed
     const embed90 = new MessageEmbed()
      .setDescription(`<a:Cross:916884830451548180> Please enter a valid user!`)
      .setColor("BLACK");
//code 1
    try {
  let user2 = message.author
    if (!args[0]) return message.channel.send({embeds:[embed9]});
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase()
      );
    if (!user) return message.channel.send({embeds:[embed90]});

    let member = db.fetch(`money_${user2.id}`);

    let embed1 = new MessageEmbed()
      .setColor("BLACK")
      .setDescription(`<a:Cross:916884830451548180> Mention someone to pay`);

    if (!args[0]) {
      return message.channel.send({embeds:[embed1]});
    }
    let embed2 = new MessageEmbed()
      .setColor("BLACK")
      .setDescription(`<a:Cross:916884830451548180> You cannot pay yourself`);

    if (user.user.id === message.author.id) {
      return message.channel.send({embeds:[embed2]});
    }

    let embed3 = new MessageEmbed()
      .setColor("BLACK")
      .setDescription(`<a:Cross:916884830451548180> Specify an amount to pay`);

    if (!args[1]) {
      return message.channel.send({embeds:[embed3]});
    }
    let embed4 = new MessageEmbed()
      .setColor("BLACK")
      .setDescription(`<a:Cross:916884830451548180> Enter A Valid Amount!`);

    if (isNaN(args[1])) {
      return message.channel.send({embeds:[embed4]});
    }
    let embed5 = new MessageEmbed()
      .setColor("BLACK")
      .setDescription(`<a:Cross:916884830451548180> You don't have that much money`);

    if (member < args[1]) {
      return message.channel.send({embeds:[embed5]});
    }

    let embed6 = new MessageEmbed()
      .setColor("BLACK")
      .setDescription(`<a:tick:916884945555828806> You have sent ${user.displayName} ${args[1]} **Crypto Coins**!`);

    message.channel.send({embeds:[embed6]});
    db.add(`money_${user.id}`, args[1]);
    db.subtract(`money_${user2.id}`, args[1]);
    } catch {
        
    }
  }
};
