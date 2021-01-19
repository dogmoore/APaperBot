module.exports = (client, message) => {
  const Discord = require('discord.js');
  const color = require('colors');
  try {
    if (message.author.id === '278548721778688010' || message.author.id === '410454488885755916' || message.author.id === '376857933067321366') {
      if (message.content.includes('>:D')) {
        try {
          let x = 3;
          function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max) + 0);
          }
          if (getRandomInt(x) == 0) {
            message.channel.send('get off your high horse Jelly!');
          }
          else if (getRandomInt(x) == 1) {
            message.channel.send('Jelly be nice now');
          }
          else if (getRandomInt(x) == 2) {
            message.channel.send('>:D');
          }
          else if (getRandomInt(x) == 3) {
            message.channel.send('feck off jelly');
          }
          else {
            message.channel.send('fuck');
          }
          console.log('prefixless command \'Jelly\'was issued\n'.green);
        }
        catch (err) {
          console.error(err.red);
        }
        finally {

        }
      }
    }
  }
  catch (err) {
    console.error(err.red);
  }
  finally {

  }

}
