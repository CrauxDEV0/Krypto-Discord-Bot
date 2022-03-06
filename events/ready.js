const client = require('../index.js');
const Discord = require('discord.js');
const mongoose = require('mongoose');

client.once('ready',() => {
    client.user.setActivity('')
    mongoose.connect(process.env.MONGODB_SRV, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log("Connected to MONGODB!"))
}).then(console.log(`logged in as ${client.user.tag}`))

