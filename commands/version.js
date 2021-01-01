module.exports = {
    name: 'version',
    discription: 'Placeholder4',
    execute(client, message, args) {
        const Discord = require('discord.js');
        const { version } = require('../config.json');
            message.channel.send(`Current Bot version is: v${version}`);
        console.log(`Version command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
    }
}
