const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "balance",
    aliases: ["bal"],
    category: "economy",
    description: "Shows Current Balance",
    usage: "[username | nickname | mention | ID](optional)",
    accessableby: "everyone",
    run: async (client, message, args) => {
    const embed = new MessageEmbed()
    embed.setDescription(`<a:Cross:916884830451548180> Enter a valid **user**`)
    embed.setColor('#f50213');

    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.member;

    let bal = db.fetch(`money_${user.id}`);

    if (bal === null) bal = 0;

    let bank = await db.fetch(`bank_${user.id}`);

    if (bank === null) bank = 0;
let Total = bal + bank
    if (user) {
      let moneyEmbed = new MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `**${user.user.username}'s Balance**\n**<:wallet:927550750844940288> Wallet:** ${bal}/-\n**<:bank:927550933838217257> Bank:** ${bank}/-\n**<a:Money:927552113389756506> Total:** ${Total}/-`
        )
        .setFooter(`@ Economy/Balance`)
        .setTimestamp();
      message.channel.send({embeds:[moneyEmbed]});
    } else {
      return message.channel.send({embeds:[embed]});
    }
  }
};
