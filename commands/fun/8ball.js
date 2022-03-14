const { MessageEmbed } = require('discord.js');
const reactions = ['😅', '🙂', '🤔']; 
const answers = ['Yes', 'Of Course', 'Maybe', 'No', 'Impossible'];
module.exports = {
  name: '8ball',
  description: 'Ask the bot a Yes/No question and wait for the answer',
  run:async(client, message, args) => {
        const question = args.join(' ');
       const error = new MessageEmbed()
       error.setDescription('**🥱 - You Didn\'t Ask Me Anything .**')
       error.setColor('BLACK')
    
        if (!question) return message.channel.send({embeds:[error]});
    
        const botans = new MessageEmbed()
          botans.setColor("BLACK")
          botans.setDescription(`${message.author} Asked Me: \n\`${question}?\` \nAnd My Answer Is: \n**${reactions[Math.floor(Math.random() * reactions.length)]} - ${answers[Math.floor(Math.random() * answers.length)]} !**`)
          botans.setFooter("@ 8ball")
          botans.setTimestamp()
          message.channel.send({embeds : [botans]}).then(() => message.delete());
    }
}
      
