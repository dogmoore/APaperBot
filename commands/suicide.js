module.exports = {
  name: 'suicide',
  description: 'kill yourself',
  execute(client, message, args) {
    const Discord = require('discord.js');
    const Logger = require('leekslazylogger');
    const log = new Logger;

    let x = 21;
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max) + 0);
    }
    let i = '';
    let ii = 0;
    let a = '';
    let Member = message.mentions.members.first();
    function suicide() {

      if (getRandomInt(x) == 0) {
        a = 'was too gay for their own good and exploded';
        i = 0;
      }
      else if (getRandomInt(x) == 1) {
        a = 'got on Jelly\'s bad side';
        i = 1;
      }
      else if (getRandomInt(x) == 2) {
        a = 'got shot and died of lead poisoning';
        i = 2;
      }
      else if (getRandomInt(x) == 3) {
        a = 'tried flirting with Paper around Piper';
        i = 3;
      }
      else if (getRandomInt(x) == 4) {
        a = 'trolled life';
        i = 4;
      }
      else if (getRandomInt(x) == 5) {
        a = 'greatly misunderstood the term *choker*';
        i = 5;
      }
      else if (getRandomInt(x) == 6) {
        a = 'pressed *ALT F4*';
        i = 6;
      }
      else if (getRandomInt(x) == 7) {
        a = 'used the forbidden bathbomb';
        i = 7;
      }
      else if (getRandomInt(x) == 8) {
        a = 'went to meet their savior, Satan';
        i = 8;
      }
      else if (getRandomInt(x) == 9) {
        a = 'insulted Fatal';
        i = 9;
      }
      else if (getRandomInt(x) == 10) {
        a = 'tried to spill government secrets';
        i = 10;
      }
      else if (getRandomInt(x) == 11) {
        a = 'didn\'t commit suicide in their cell after running a pedo ring for the top 1%';
        i = 11;
      }
      else if (getRandomInt(x) == 12) {
        a = 'got tickled by Jelly';
        i = 12;
      }
      else if(getRandomInt(x) == 13) {
        a = 'fell out of the world';
        i = 13;
      }
      else if(getRandomInt(x) == 14) {
        a = 'insulted Putin';
        i = 14;
      }
      else if(getRandomInt(x) == 15) {
        a = 'flew a kite in a thunderstorm with a brass key tied to it';
        i = 15;
      }
      else if(getRandomInt(x) == 16) {
        a = 'wanted to see what the flavor of electricity was';
        i = 16;
      }
      else if(getRandomInt(x) == 17) {
        a = 'harassed Thanos';
        i = 17;
      }
      else if(getRandomInt(x) == 18) {
        a = 'decided to meet Destiny\'s parents';
        i = 18;
      }
      else if(getRandomInt(x) == 19) {
        a = 'decided to meet Ched\'s parents';
        i = 19;
      }
      else if(getRandomInt(x) == 20) {
        a = 'slept with Piper';
        i = 20;
      }
      else {
        suicide();
        x = x + 1;
      }
    }
    if (Member == undefined) {
      suicide();
      message.reply(a);
      log.console(log.format(`&bSuicide command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\nNumber issued: ${i}\nTimes Errored: ${ii}`));
    }
    else {
      if (message.member.hasPermission('MANAGE_SERVER')) {
        suicide();
        message.channel.send(`${Member} ${a}`);
        log.console(log.format(`&bSuicide command used in server: ${message.guild.name}\nIssued by: ${message.author.tag} used against: ${Member}\nNumber issued: ${i}\nTimes Errored: ${ii}`));
      }
      else {
        suicide();
        message.reply(a);
        log.console(log.format(`&bSuicide command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\nNumber issued: ${i}\nTimes Errored: ${ii}`));
      }
    }

    // suicide();
    // log.console(log.format(`&bSuicide command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\nNumber issued: ${i}\nTimes Errored: ${ii}`));
  }
}
