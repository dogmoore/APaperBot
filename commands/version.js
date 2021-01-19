module.exports = {
    name: 'version',
    description: 'says the current version',
    execute(client, message, args) {
        const Discord = require('discord.js');
        const color = require('colors');
        const { version } = require('../config.json');
            message.channel.send(`Current Bot version is: v${version}`);
        console.log(`Version command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`.cyan);
    }
}
