const discord = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Get someone's or your avatar!",
  usage: "c!avatar",
  aliases: ["av"],
  run: (client, message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) user = message.author

    let avatar = user.displayAvatarURL({ dynamic: true, size: 4096, format: 'png' })

    let embed = new discord.MessageEmbed()
      .setTitle(`<:image:948279032934461500> Avatar of ${user.tag}`)
      .setColor("BLACK")
      .setDescription(``)
      .setImage(avatar)
      .setFooter('@ Avatar')
      .setTimestamp()
      

    message.channel.send({ embeds: [embed] })
  }
}
