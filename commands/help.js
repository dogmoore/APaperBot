module.exports = {
    name: 'help',
    discription: 'placeholder6',
    execute(message) {
        const Discord = require('discord.js');
        const { prefix } = require('../config.json');
        const Help = new Discord.MessageEmbed()
            .setColor('#0339fc')
            .setTitle('Bot commands')
            .setThumbnail('https://i.imgur.com/8lRaG6L.png')
            .addField('\u200B', '\u200B')
            .addField(`${prefix}kick`, 'Ping someone to kick them', false)
            .addField(`${prefix}dm`, 'Ping someone to DM them', false)
            .addField(`${prefix}server`, 'Used to say the server name and current member count', false)
            .addField(`${prefix}love_you`, 'To find out if I love you', false)
            .setTimestamp()
            .setFooter('APaperBot Created by dogmoore#0001');
        console.log(`Help command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
        message.channel.send(Help);
    }
}