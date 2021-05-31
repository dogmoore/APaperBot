module.exports = {
  name: 'tban',
  description: 'actually ban',
  execute(client, message, args) {
    const Discord = require('discord.js');
    const Member = message.mentions.members.first();
    const Logger = require('leekslazylogger');
    const log = new Logger;
    const { owner } = require('../config.json');

    const argsError = new Discord.MessageEmbed()
    .setColor('#c70606')
    .setTitle('Argument Error')
    .setURL('https://bit.ly/2JMYqCD')
    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
    .addField('If you want to ban someone, ping them!', '\u200B', true)
    .setTimestamp()
    .setFooter(`APaperBot Created by ${owner}`);

    const permissionError = new Discord.MessageEmbed()
    .setColor('#c70606')
    .setTitle('Permission Error')
    .setURL('https://bit.ly/2JMYqCD')
    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
    .addField(`You do not have permissions for this command', 'If this is a mistake please let ${owner} know`, false)
    .setTimestamp()
    .setFooter(`APaperBot Created by ${owner}`);

    const ban = new Discord.MessageEmbed()
    .setColor('#0339fc')
    .setTitle('APaperModerator')
    .setURL('https://bit.ly/2JMYqCD')
    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
    .addFields(
      { name: `User ${Member} was ban from ${message.guild.name}!`, value: '\u200B' },
    )
    .setTimestamp()
    .setFooter(`APaperBot Created by ${owner}`);

    try {
      if (!message.member.hasPermission('BAN_MEMBERS') || Member == '376857933067321366') return message.channel.send(permissionError);
      else if (message.member.hasPermission('BAN_MEMBERS') || message.author.id === '376857933067321366') {
        if (Member == undefined) {
          message.channel.send(argsError);
        }
        else {
          message.channel.send(ban);
          Member.ban(Member);
        }
      }
      else {
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
