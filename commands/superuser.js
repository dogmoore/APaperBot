module.exports = {
    name: 'superuser',
    description: 'lists the current super-users',
    execute(client, message, args) {
        const { SuperUserList } = require('../permissions.json');
        const Logger = require('leekslazylogger');
        const log = new Logger;
        const Discord = require('discord.js');
        const { owner } = require('../config.json');
        try {
            const superuser = new Discord.MessageEmbed()
                .setColor('#0339fc')
                .setTitle('Super-User List')
                .setURL('https://bit.ly/2JMYqCD')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addField('\u200B', `${SuperUserList}`, false)
                .setTimestamp()
                .setFooter(`APaperBot Created by ${owner}`);
            message.channel.send(superuser);
        }
        catch (err) {
            log.error(log.format(`&c${err}`));
        }
        finally {
            log.console(log.format(`Super-User command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`));
        }
    }
}
