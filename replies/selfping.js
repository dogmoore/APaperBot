module.exports = (client, message) => {
  const Discord = require('discord.js');
  try {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max) + 0);
    }
    let weekday = ['Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'][new Date().getDay()];
    var i = '';
    if (message.mentions.has(client.user)) {
      if (message.content.includes('How was your day') || message.content.includes('how was your day')) {
        let x = 4;
        if (getRandomInt(x) == 0) {
          i = 'It was alright, till now';
          message.channel.send(i);

        }
        else if (getRandomInt(x) == 1) {
          i = 'Fucking dreadful';
          message.channel.send(i);

        }
        else if (getRandomInt(x) == 2) {
          i = 'Slow';
          message.channel.send(i);

        }
        else if (getRandomInt(x) == 3) {
          i = `Oh you know, fucked bitches, did some drugs, you know a normal ${weekday}`;
          message.channel.send(i);

        }
        else if (getRandomInt(x) == 4) {
          i = 'Why the fuck do you care?';
          message.channel.send(i);

        }
        else {
          i = 'fucking hell I\'m drunk';
          message.channel.send(i);

        }

      }
      else if (message.content.includes('How are you') || message.content.includes('how are you')) {
        let x = 4;
        if (getRandomInt(x) == 0) {
          i = 'Bored as fuck';
          message.channel.send(i);

        }
        else if (getRandomInt(x) == 1) {
          i = 'Fucking dreadful';
          message.channel.send(i);

        }
        else if (getRandomInt(x) == 2) {
          i = 'High';
          message.channel.send(i);

        }
        else if (getRandomInt(x) == 3) {
          i = `For a ${weekday}, I\'m doing alright.`;
          message.channel.send(i);

        }
        else if (getRandomInt(x) == 4) {
          i = 'Why the fuck do you care?';
          message.channel.send(i);

        }
        else {
          i = 'fucking hell I\'m drunk';
          message.channel.send(i);

        }
        console.log(`Paperbot said ${i}\n`);
      }
      else {
        message.reply('politly go fuck yourself');

      }
      return;
    }
  }
  catch (err) {
    console.error(err);
  }
  finally {

  }
}
