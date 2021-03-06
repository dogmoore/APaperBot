module.exports = {
    name: 'tsay',
    description: 'Makes the bot say something',
    execute(client, message, args) {
      const Discord = require('discord.js');
      const Logger = require('leekslazylogger');
      const log = new Logger;
      const { owner } = require('../config.json');

      function del() {
        message.delete();
      };

        let dog = '376857933067321366';
        let jelly = '278548721778688010';
        let  success = ` `;
        if (message.author.id === dog || message.author.id === jelly) {
            if (!args.length) {
                setTimeout(del, 50);
                success = 'length error, did not send';
                return;
            }
            else {
                let sendMessage = message.content.substring(6);
                message.channel.send(`${sendMessage}`);
                setTimeout(del, 50);
                success = `success`;
            }
        }
        else {
            const permissionError = new Discord.MessageEmbed()
                .setColor('#c70606')
                .setTitle('Permission Error')
                .setURL('https://bit.ly/2JMYqCD')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addField('You do not have permissions for this command', `Currently only the bot owner \`${owner}\` has access`, false)
                .setTimestamp()
                .setFooter(`APaperBot Created by ${owner}`);
            message.channel.send(permissionError);
            success = `failure`;
        }
            log.console(log.format(`&bTrue say command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n${success}\n`));
    }
}
