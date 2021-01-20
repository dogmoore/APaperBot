module.exports = {
    name: 'help',
    description: 'The current help command',
    execute(client, message, args) {
        const Discord = require('discord.js');
        const { Admin } = require('../permissions.json');
        const Logger = require('leekslazylogger');
        const log = new Logger;
        const GuildOwner = message.guild.owner;
        const { prefix } = require('../config.json');
        try {
            const Help = new Discord.MessageEmbed()
                .setColor('#0339fc')
                .setTitle('Bot commands')
                .setURL('https://bit.ly/2JMYqCD')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addFields(
                    { name: `${prefix}kick`, value: 'Ping someone to kick them' },
                    { name: `${prefix}ban`, value: 'Ping someone to ban them' },
                    { name: `${prefix}dm`, value: 'Ping someone to DM them' },
                    { name: `${prefix}server`, value: 'Used to say the server name and current member count' },
                    { name: `${prefix}love-you`, value: 'To find out if I love you' },
                    { name: `${prefix}ping`, value: 'Sends a ping request' },
                    { name: `${prefix}superuser`, value: 'Lists the current super-users' },
                )
                .setTimestamp()
                .setFooter('APaperBot Created by dogmoore#0001');
            if (Admin.includes(message.author.id)) {
                    Help.setColor('#0339fc')
                    .setTitle('Bot commands')
                    .addFields(
                        { name: `${prefix}tkick`, value: 'Actually kick someone from the server!' },
                        { name: `${prefix}tban`, value: 'Actually ban someone from the server!' },
                        { name: `${prefix}say`, value: 'Make the bot speak' },
                        { name: `${prefix}shutdown`, value: 'Turns off the bot *SUPER-USERS ONLY*' },
                    )
                    .setTimestamp()
                    .setFooter('APaperBot Created by dogmoore#0001');
                log.console(log.format(`&b&lAdmin help command used in server: ${message.guild.name}\nIssued by owner: ${message.author.tag}\n`));
                message.channel.send(Help);
            }
            else {
                if (message.author === GuildOwner) {
                    message.channel.send('Ask dogmoore to add your userID to the permissions file if you wish access Admin commands');
                }
                log.console(log.format(&b`Help command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`));
                message.channel.send(Help);
            }
        }
        catch (err) {
            log.error(log.format(`&c${err}`));
        }
        finally {

        }
    }
}
