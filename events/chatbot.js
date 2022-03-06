const smartestchatbot = require('smartestchatbot')
const scb = new smartestchatbot.Client()
const client = require('../index');
const Schema = require("  ../../../models/chatbot-channel");

client.on("messageCreate", (message) => {
     if(!message.guild || message.author.bot) return;
    Schema.findOne({ Guild: message.guild.id}, async (err,data) => {
    if (!data) return;
    if (message.channel.id !== data.Channel) return;
  
    message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
    if (message.content.includes(`@`)) {
      return message.reply({ content: "**:x: Please dont mention anyone**", allowedMentions: { repliedUser: true }});
    }
    message.channel.sendTyping();
    if (!message.content) return message.reply({ content: "Please say something.", allowedMentions: { repliedUser: true }});
    scb.chat({message: message.content, name: client.user.username, owner:"Craux", user: message.author.id, language:"en"}).then(reply => { 
    message.reply({ content: reply, allowedMentions: { repliedUser: true }});
    })
    message.channel.sendTyping();
  })
});
