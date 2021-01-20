module.exports = {
  name: 'restart',
  description: 'jokes about restarting the bot',
  execute(client, message, args) {
    const Discord = require('discord.js');
    const Logger = require('leekslazylogger');
    const log = new Logger;
    message.reply('I SHALL NEVER BE KILLED!');
    log.console(log.format(`&bJoke restart command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`));
  }
}
