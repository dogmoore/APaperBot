module.exports = {
  name: 'tkick',
  description: 'actually kick',
  execute(client, message, args) {
    const Logger = require('leekslazylogger');
    const log = new Logger;
    const Discord = require('discord.js');
    const Member = message.mentions.members.first();
    const { owner } = require('../config.json');

    const permissionError = new Discord.MessageEmbed()
    .setColor('#c70606')
    .setTitle('Permission Error')
    .setURL('https://bit.ly/2JMYqCD')
    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
    .addField(`You do not have permissions for this command`, `If this is a mistake please let ${owner} know`, false)
    .setTimestamp()
    .setFooter(`APaperBot Created by ${owner}`);

    const argsError = new Discord.MessageEmbed()
    .setColor('#c70606')
    .setTitle('Argument Error')
    .setURL('https://bit.ly/2JMYqCD')
    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
    .addField('If you want to kick someone, ping them!', '\u200B', true)
    .setTimestamp()
    .setFooter(`APaperBot Created by ${owner}`);

    const kick = new Discord.MessageEmbed()
    .setColor('#0339fc')
    .setTitle('APaperModerator')
    .setURL('https://bit.ly/2JMYqCD')
    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
    .addFields(
      { name: `User ${Member} was kicked from ${message.guild.name}!`, value: '\u200B' },
    )
    .setTimestamp()
    .setFooter(`APaperBot Created by ${owner}`);

    try {
      if (!message.member.hasPermission('KICK_MEMBERS') || Member === '376857933067321366') return message.channel.send(permissionError);
      else if (message.member.hasPermission('KICK_MEMBERS') || message.author.id === '376857933067321366') {
        if (Member == undefined) return message.channel.send(argsError);
        message.channel.send(kick);
        Member.kick(Member);
      }
    }
    catch(err) {
      log.error(log.format(`&c${err}`));
    }
    finally {

    }
  }
}
