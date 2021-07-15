module.exports = (client, message) => {
  const Discord = require('discord.js');
  const Logger = require('leekslazylogger');
  const log = new Logger;
  try {
    if (message.author.id === '741534475954946102') {// || message.author.id === '376857933067321366') {
      let i = message.content.toLowerCase();
      if (i.includes('shut up') || i.includes('stfu') || i.includes('shut it') || i.includes('s h u t u p') || i.includes('shut the fuck up') || i.includes('shut the hell up')) {
        message.channel.send('DESTINY RAE DIXON TAKE YOUR OWN ADVICE AND SHUT THE MOUTH >:[');
        log.console(log.format(`&areply DESTINY was used in server: ${message.guild.name}\n`));
      }
    }
  }
  catch (err) {
    log.error(log.format(`&c${err}`));
  }
  finally {
  }
}
