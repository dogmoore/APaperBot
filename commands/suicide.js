module.exports = {
  name: 'suicide',
  description: 'Makes the bot say something',
  execute(client, message, args) {
    const Discord = require('discord.js');
    const Logger = require('leekslazylogger');
    const log = new Logger;

    let x = 12;
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max) + 0);
    }
    if (getRandomInt(x) == 0) {
      message.reply('was too gay for their own good and exploded');
    }
    else if (getRandomInt(x) == 1) {
      message.reply('got on Jelly\s bad side');
    }
    else if (getRandomInt(x) == 2) {
      message.reply('got shot and died of lead poisoning');
    }
    else if (getRandomInt(x) == 3) {
      message.reply('tried flirting with Paper around Piper');
    }
    else if (getRandomInt(x) == 4) {
      message.reply('trolled life');
    }
    else if (getRandomInt(x) == 5) {
      message.reply('greatly misunderstood the term *choker*');
    }
    else if (getRandomInt(x) == 6) {
      message.reply('pressed *ALT F4*');
    }
    else if (getRandomInt(x) == 7) {
      message.reply('used the forbidden bathbomb');
    }
    else if (getRandomInt(x) == 8) {
      message.reply('went to meet they\'re savior, Satan');
    }
    else if (getRandomInt(x) == 9) {
      message.reply('insulted Fatal');
    }
    else if (getRandomInt(x) == 10) {
      message.reply('tried to spill government secrets');
    }
    else if (getRandomInt(x) == 11) {
      message.reply('didn\'t commit suicide in they\'re cell after running the top 1% pedo ring');
    }
    else if (getRandomInt(x) == 12) {
      message.reply('got tickled by Jelly');
    }
    else {
      message.reply('met ched\'s parents');
    }
    log.console(log.format(`&bSuicide command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`));
  }
}
