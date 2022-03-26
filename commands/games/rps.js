const discord = require('discord.js');
const { simplydjs } = require('simply-djs');

module.exports = {
    name:'rps',
    run:async(client, message, args) => {
        simplydjs.rps(message);
    }
}
