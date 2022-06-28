const prefixModel = require("../../database/guildData/antilink");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "antilink",
  description: "Setup antilink per server!",
  userPerms: ["MANAGE_GUILD"],
  run: async (client, message, args) => {
    let embed1 = new MessageEmbed()
    embed1.setDescription(`<a:Warning:919038531895197766> Usage: \`c!antilink <on|off>\``)
    embed1.setColor('BLACK');
    //second embed
    let embed2 = new MessageEmbed()
    embed2.setTitle(`Antilink Mod`)
    embed2.setDescription(`<a:tick:916884945555828806> Antilink is now activated!`)
    embed2.setFooter('Mod@Antilink')
    embed2.setColor("BLACK")
    embed2.setTimestamp();
    //disable embed
    let embed3 = new MessageEmbed()
    embed3.setTitle(`Antilink Mod`)
    embed3.setDescription(`<a:tick:916884945555828806> Antilink deactivated!`)
    embed3.setFooter('Mod@Antilink')
    embed3.setColor("BLACK")
    embed3.setTimestamp();
    //not setup embed
    let embed4 = new MessageEmbed()
    embed4.setDescription(`<a:Cross:916884830451548180> Antilink is not setuped yet!`)
    embed4.setColor('BLACK');

    if (!args[0]) {
      return message.channel.send({embeds:[embed1]})
    }
    if (args[0] === "On" || args[0] === "on") {
      const data = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.channel.send({embeds:[embed2]});

        let newData = new prefixModel({
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.channel.send({embeds:[embed2]});

        let newData = new prefixModel({
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "off" || args[0] === "Off") {
      const data2 = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.channel.send({embeds:[embed3]});
      } else if (!data2) {
        return message.channel.send({embeds:[embed4]});
      }
    }
  },
};
