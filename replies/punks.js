module.exports = (client, message) => {
  const Discord = require('discord.js');
  const Logger = require('leekslazylogger');
  const log = new Logger;
  const { prefix } = require('../config.json');
  try {
    if(message.author.bot) return;
    if(message.content.startsWith(`${prefix}`)) return;
    let msg = message.content.toLowerCase();
    if (msg.includes('punks')) {
      message.channel.send('PUNKSIE!');
      log.console(log.format(log.console(log.format('&aprefixless command \'Punks\' was issued\n'));));
    }
  }
  catch (err) {
    log.error(log.format(`&c${err}`));
  }
  finally {

  }
}
