module.exports = {
    name: 'shutdown',
    dscription: 'Shuts down the bot',
    execute(client, message, args) {
        const Discord = require('discord.js');
        const Logger = require('leekslazylogger');
        const log = new Logger;
        const { SuperUserID } = require('../permissions.json');
        const { prefix } = require('../config.json');
        const { owner } = require('../config.json');
        try {
            if (message.author.id === `376857933067321366`) {
                log.console(log.format(`&bShutdown command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`));
                log.console(log.format('&6shutting down...'));
                message.reply('You fucking killed me!');
                const TwitchLog = new Discord.MessageEmbed()
                .setColor('#6441a5')
                .setTitle('Twitch')
                .setURL('https://bit.ly/2JMYqCD')
                .setThumbnail('https://i.imgur.com/cX5K9oZ.png')
                .addField('Offline', `APaperBot disconnected from twitch`)
                .setTimestamp()
                .setFooter(`APaperBot Created by ${owner}`);
                const channelLog = client.channels.cache.find(channel => channel.id === '847161067938512896');
                channelLog.send(TwitchLog);
                setTimeout(() => { process.exit(); }, 2000);
            }
            else {
                const permissionError = new Discord.MessageEmbed()
                    .setColor('#c70606')
                    .setTitle('Permission Error')
                    .setURL('https://bit.ly/2JMYqCD')
                    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                    .addField('You do not have permissions for this command', 'This is a Super-User only command', false)
                    .addField('', `To see the super-user list run \`${prefix}superuser\``)
                    .setTimestamp()
                    .setFooter(`APaperBot Created by ${owner}`);
                message.channel.send(permissionError);
            }
        }
        catch (err) {
            log.error(log.format(`&c${err}`));
        }
        finally {

        }
    }
}
