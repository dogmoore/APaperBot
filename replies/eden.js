module.exports = (client, message) => {
  const Discord = require('discord.js');
  try {
    if (message.author.id === '669436598886072320') {
      if (message.content.includes('destiny') || message.content.includes('Destiny')) {
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
        console.log('prefixless command \'Eden\' was issued\n');
      }
    }
  }
  catch (err) {
    console.error(err);
  }
  finally {

  }
}
