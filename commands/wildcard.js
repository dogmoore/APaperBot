module.exports = {
  name: 'wildcard',
  description: 'gives the person who runs the command the `*` role',
  execute(client, message, args) {
    const Discord = require('discord.js');
    const Logger = require('leekslazylogger');
    const log = new Logger;

    const permissionError = new Discord.MessageEmbed()
    .setColor('#c70606')
    .setTitle('Permission Error')
    .setURL('https://bit.ly/2JMYqCD')
    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
    .addField('You do not have permissions for this command', 'If this is a mistake please let dogmoore#0001 know', false)
    .setTimestamp()
    .setFooter('APaperBot Created by dogmoore#0001');

    const guildError = new Discord.MessageEmbed()
    .setColor('#c70606')
    .setTitle('Server Error')
    .setURL('https://bit.ly/2JMYqCD')
    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
    .addField('You in the wrong server for this command', 'If this is a mistake please let dogmoore#0001 know', false)
    .setTimestamp()
    .setFooter('APaperBot Created by dogmoore#0001');

    let dog = '376857933067321366';
    let jelly = '278548721778688010';
    let guildID = '759170742154690560';
    let member = message.mentions.members.first();
    try {
      if (message.guild.id == guildID) {
        if (member == undefined) return message.channel.send('Please tag someone');
        else if (message.author.id == dog || message.author.id == jelly) {
          message.channel.send('why are you like this...');
          member.roles.add('798415659880284210');
          log.console(log.format(`&bWildcard command used in: ${message.guild.name}\nIssued by: ${message.author.tag}\n`));
        }
        else {
          message.channel.send(permissionError);
        }
      }
      else {
        message.channel.send(guildError);
      }
    }
    catch(err) {
      log.error(log.format(`&c${err}`));
    }
    finally {

    }
  }
}
