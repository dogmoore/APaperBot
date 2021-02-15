module.exports = (client, message) => {
  const Discord = require('discord.js');
  const Logger = require('leekslazylogger');
  const log = new Logger;
  try {
    if (message.author.id === '669436598886072320') {
      let msg = message.content.toLowerCase();
      if (msg.includes('destiny')) {
        let x = 3;
        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max) + 0);
        }
        if (getRandomInt(x) == 0) return;
        else if (getRandomInt(x) == 1) {
          message.channel.send('GAY FUCKS');
        }
        else if (getRandomInt(x) == 2) {
          message.channel.send('O.O');
        }
        else if (getRandomInt(x) == 3) {
          message.channel.send('dog won\'t be happy ');
        }
        else {
          message.channel.send('But edy....');
        }
        log.console(log.format('&aprefixless command \'Eden\' was issued\n'));
      }
    }
  }
  catch (err) {
    log.error(log.format(`&c${err}`));
  }
  finally {

  }
}
