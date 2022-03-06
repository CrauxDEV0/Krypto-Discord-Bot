const client = require('../index.js');
const db = require('quick.db')
const keepAlive = require('../events/ready')
const fs= require('fs')
const Discord = require('discord.js')
const cooldowns = new Map()

client.on('messageCreate', async message =>{ 
    let prefix = "c!"
 if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
        if (!message.member.permissions.has(command.UserPerms || [])) return message.channel.send(`User Dont Have \`${command.UserPerms || []}\` Permissions`)
        if (!message.guild.me.permissions.has(command.ClientPerms || [])) return message.channel.send(`Client missing \`${command.ClientPerms || []}\` Permissions`)


        if (!cooldowns.has(command.name)) {

            cooldowns.set(command.name, new Discord.Collection())

        }

        const currentTime = Date.now()
        const timeStamps = cooldowns.get(command.name)
        const cooldownAmount = (command.cooldown) * 1000

        if (timeStamps.has(message.author.id)) {

            const expTime = timeStamps.get(message.author.id) + cooldownAmount

            if (currentTime < expTime) {

                const timeLeft = (expTime - currentTime) / 1000

                const tmotEmbed = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription(`❌ - Please wait \`${timeLeft.toFixed(1)} sec \` more seconds before using \`${command.name}\`!`)

                return message.reply({ embeds: [tmotEmbed] })

            }

        }

        timeStamps.set(message.author.id, currentTime)

        setTimeout(() => {
            timeStamps.delete(message.author.id)
        }, cooldownAmount)



        }



try {
    if(command) command.run(client, message, args)  
} catch (err) {
  console.log(err)
}


})
