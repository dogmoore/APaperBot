module.exports = {
    name: 'say',
    description: 'Makes the bot say something',
    execute(client, message, args) {
        const { BotOwner } = require('../permissions.json');
        const Discord = require('discord.js');
        const Logger = require('leekslazylogger');
        const log = new Logger;
        let success = ``;
        try {
            if (message.author.id === BotOwner) {
                if (!args.length) {
                    setTimeOut(message.delete(), 50);
                    return;
                }
                else {
                    let sendMessage = message.content.substring(5);
                    message.channel.send(`${sendMessage}`);
                    setTimeOut(message.delete(), 50);
                    success = `success`;
                }
            }
            else {
                const permissionError = new Discord.MessageEmbed()
                    .setColor('#c70606')
                    .setTitle('Permission Error')
                    .setURL('https://bit.ly/2JMYqCD')
                    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                    .addField('You do not have permissions for this command', 'Currently only the bot owner `dogmoore#0001` has access', false)
                    .setTimestamp()
                    .setFooter('APaperBot Created by dogmoore#0001');
                message.channel.send(permissionError);
                success = `failure`;
            }
            log.console(log.format(`&bSay command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n${success}\n`));
        }
        catch (err) {
            log.error(log.format(`&c${err}`));
        }
        finally {

        }
    }
}
