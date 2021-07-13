module.exports = (client, message) => {
  const Discord = require('discord.js');
  const Logger = require('leekslazylogger');
  const log = new Logger;
  const { prefix } = require('../config.json');
  try {
    let jellyfish = '799880448653525012';
    if (message.author.id === jellyfish) {
    //  message.reply('Fuck you');
    }
    else if (message.author.bot) return;
    else if (message.content.startsWith(`${prefix}`)) return;
    let msg = message.content.toLowerCase();
    if (msg.includes('jellyfish')) {
      //message.channel.send('FUCK JELLYFISH');
      log.console(log.format('&aprefixless command \'Jellyfish\' was issued\n'));
    }
  }
  catch (err) {
    log.error(log.format(`&c${err}`));
  }
  finally {

  }
}
