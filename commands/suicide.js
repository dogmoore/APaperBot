module.exports = {
  name: 'suicide',
  description: 'Makes the bot say something',
  execute(client, message, args) {
    const Discord = require('discord.js');
    const Logger = require('leekslazylogger');
    const log = new Logger;

    let x = 14;
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max) + 0);
    }
    let i = '';
    let ii = 0;
    function suicide() {

      if (getRandomInt(x) == 0) {
        message.reply('was too gay for their own good and exploded');
        i = 0;
      }
      else if (getRandomInt(x) == 1) {
        message.reply('got on Jelly\'s bad side');
        i = 1;
      }
      else if (getRandomInt(x) == 2) {
        message.reply('got shot and died of lead poisoning');
        i = 2;
      }
      else if (getRandomInt(x) == 3) {
        message.reply('tried flirting with Paper around Piper');
        i = 3;
      }
      else if (getRandomInt(x) == 4) {
        message.reply('trolled life');
        i = 4;
      }
      else if (getRandomInt(x) == 5) {
        message.reply('greatly misunderstood the term *choker*');
        i = 5;
      }
      else if (getRandomInt(x) == 6) {
        message.reply('pressed *ALT F4*');
        i = 6;
      }
      else if (getRandomInt(x) == 7) {
        message.reply('used the forbidden bathbomb');
        i = 7;
      }
      else if (getRandomInt(x) == 8) {
        message.reply('went to meet their savior, Satan');
        i = 8;
      }
      else if (getRandomInt(x) == 9) {
        message.reply('insulted Fatal');
        i = 9;
      }
      else if (getRandomInt(x) == 10) {
        message.reply('tried to spill government secrets');
        i = 10;
      }
      else if (getRandomInt(x) == 11) {
        message.reply('didn\'t commit suicide in their cell after running a pedo ring for the top 1%');
        i = 11;
      }
      else if (getRandomInt(x) == 12) {
        message.reply('got tickled by Jelly');
        i = 12;
      }
      else if(getRandomInt(x) == 13) {
        message.reply('Fell out of the world');
        i = 13;
      }
      else {
        suicide();
        x = x + 1;
      }
    }
    suicide();
    log.console(log.format(`&bSuicide command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\nNumber issued: ${i}\nTimes Errored: ${ii}`));
  }
}
