module.exports = (client, message) => {
  const Discord = require('discord.js');
  const Logger = require('leekslazylogger');
  const log = new Logger;
  const { prefix } = require('../config.json');
  try {
    if(message.author.bot) return;
    if(message.content.startsWith(`${prefix}`)) return;
    let msg = message.content.toLowerCase();
    if (msg.includes('waffle')) {
      message.channel.send('WAFFIE!');
      log.console(log.format('&aprefixless command \'Waffle\' was issued\n'));
    }
  }
  catch (err) {
    log.error(log.format(`&c${err}`));
  }
  finally {

  }
}
