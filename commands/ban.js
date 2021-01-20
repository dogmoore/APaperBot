module.exports = {
    name: 'ban',
    description: 'a joke ban command',
    execute(client, message, args) {
        const taggedUser = message.mentions.users.first();
        const Discord = require('discord.js');
        const Logger = require('leekslazylogger');
        const log = new Logger;
        if (!message.mentions.users.size) {
            const banError = new Discord.MessageEmbed()
                .setColor('#c70606')
                .setTitle('Argument Error')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addField('What the fuck did you do', 'You need to ping someone to ban you cunt!', true)
                .setTimestamp()
                .setFooter('If this is a mistake, go fuck yourself');
            message.channel.send(banError);
        }
        else {
            message.channel.send(`You wanted to ban ${taggedUser.username}? I don't think I will let you, I like having them around!`);
        }
        log.console(log.format(`&bJoke ban command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`));
    }
}
