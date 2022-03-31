const gtranslate = require('translate-google');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name:'translate',
    description:'translate different language to English',
    usage:'translate | <message> | <lang>',
    run:async(client, message, args) => {
        //embeds
        const embed = new MessageEmbed()
        .setDescription(` Please include a **__language__** in the message to translate like **__sp __** and **__en__**!`)
        .setColor("BLACK")
        //embed 1
        const embed1 = new MessageEmbed()
        .setDescription(`The message is too long!!`)
        .setColor("BLACK")
        //code block 1
        if(!args[1])
         return message.channel.send({embeds:[embed]}).then(m => m.delete({ timeout: 3000 }));
        //code block 2
       let lang = args[args.length - 2 ];
       if (lang.charAt(0) == '-') {
           lang = lang.substring(2);
           args.pop();
       } else {
           lang="en"
       }
       //code block 3
       let text = args.slice(2).join(" ");
       if(text.length > 700) {
           message.channel.send({embeds:[embed1]}).then(m => m.delete({ timeout: 3000 }))
           return;
       }
       //code block 4
       let ptext = text;
       text = text.split(/(?=[?!.])/gi);
       text.push(" ");
       gtranslate(text, { to: lang }).then(res => {
           let reply = new MessageEmbed()
           .setTitle(`Translator`)
           .setColor("BLACK")              
           .addField(`Inputted Text`, `\`\`\`css\n${ptext}\`\`\``)
           .addField(`Language`, `\`\`\`css\n${lang}\`\`\``)
           .addField(`Output`, `\`\`\`css\n${"" + res.join(" ")}\`\`\``)
           .setAuthor("Crypto Bot", client.user.displayAvatarURL())
           .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1024px-Google_Translate_logo.svg.png")
           .setFooter(`Requested by ${message.author.username}`)           .setTimestamp()
           message.channel.send({embeds:[reply]})
       }).catch(err => {
           message.channel.send(`Could not find that Language!`)
       })
    }
}
