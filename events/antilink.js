const antilinkData = require("../database/guildData/antilink");
const ms = require('ms')

module.exports = async (message) => {
  const antilink = await antilinkData.findOne({
    GuildID: message.guild.id,
  });
  if (antilink) {
    if (
      message.content.match("https://") ||
      message.content.match("discord.gg") ||
      message.content.match("www.")
    ) {
      message.delete();
      let embed = new MessageEmbed()
      embed.setDescription(`**<a:Cross:916884830451548180> No links allowed while anti-link is active!**`)
      embed.setColor("BLACK");
      let msg = message.channel.send({embeds:[embed]}).then((msg) => {
          let time = "2s";
          setTimeout(function () {
            msg.delete();
          }, ms(time));
        });
    }
  }
};
