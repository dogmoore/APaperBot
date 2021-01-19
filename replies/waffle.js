module.exports = (client, message) => {
  const Discord = require('discord.js');
  const { prefix } = require('../config.json');
  try {
    if(message.author.bot) return;
    if(message.content.startsWith(`${prefix}`)) return;
    if (message.content.includes('waffle') || message.content.includes('WAFFLE')) {
      message.channel.send('WAFFIE!');
      console.log('waffle was mentioned\n');
    }
  }
  catch (err) {
    console.error(err);
  }
  finally {

  }
}
