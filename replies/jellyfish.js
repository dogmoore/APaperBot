module.exports = (client, message) => {
  const Discord = require('discord.js');
  const Logger = require('leekslazylogger');
  const log = new Logger;
  const { prefix } = require('../config.json');
  try {
    if (message.author.bot) return;
    if (message.content.startsWith(`${prefix}`)) return;
    if (message.content.includes('jellyfish') || message.content.includes('Jellyfish')) {
      message.channel.send('go on and bring that smelly bot here, I\'ll fight it and win!\nFUCK JELLYFISH');
      log.console(log.format('&aprefixless command \'Jellyfish\'was issued\n'));
    }
  }
  catch (err) {
    log.error(log.format(`&c${err}`));
  }
  finally {

  }
}
