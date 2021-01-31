module.exports = {
  name: 'say',
  description: 'Makes the bot say something',
  execute(client, message, args) {
    const { BotOwner } = require('../permissions.json');
    const Discord = require('discord.js');
    const Logger = require('leekslazylogger');
    const log = new Logger;

    function del() {
      message.delete();
    }

    let success = ``;
    try {
      if (!args.length) {
        setTimeout(del, 50);
        const lengthError = new Discord.MessageEmbed()
        .setColor('#c70606')
        .setTitle('Length Error')
        .setURL('https://bit.ly/2JMYqCD')
        .setThumbnail('https://i.imgur.com/8lRaG6L.png')
        .addField('You need to add a message if you want me to say it', '\u200b', false)
        .setTimestamp()
        .setFooter('APaperBot Created by dogmoore#0001');
        message.channel.send(lengthError);
        success = 'failure';
        return;
      }
      else {
        let sendMessage = message.content.substring(5);
        message.reply(`wanted me to say:\n${sendMessage}`);
        setTimeout(del, 3000);
        success = `success`;
      }
      // else {
      //     const permissionError = new Discord.MessageEmbed()
      //         .setColor('#c70606')
      //         .setTitle('Permission Error')
      //         .setURL('https://bit.ly/2JMYqCD')
      //         .setThumbnail('https://i.imgur.com/8lRaG6L.png')
      //         .addField('You do not have permissions for this command', 'Currently only the bot owner `dogmoore#0001` has access', false)
      //         .setTimestamp()
      //         .setFooter('APaperBot Created by dogmoore#0001');
      //     message.channel.send(permissionError);
      //     success = `failure`;
      // }
      log.console(log.format(`&bSay command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n${success}\n`));
    }
    catch (err) {
      log.error(log.format(`&c${err}`));
    }
    finally {

    }
  }
}
