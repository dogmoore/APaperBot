module.exports = (client, message) => {
  const Discord = require('discord.js');
  const color = require('colors');
  const { prefix } = require('../config.json');
  try {
    if (message.author.bot) return;
    if (message.content.startsWith(`${prefix}`)) return;
    if (message.content.includes('jellyfish') || message.content.includes('Jellyfish')) {
      message.channel.send('go on and bring that smelly bot here, I\'ll fight it and win!\nFUCK JELLYFISH');
      console.log('prefixless command \'Jellyfish\'was issued\n'.green);
    }
  }
  catch (err) {
    console.error(err.red);
  }
  finally {

  }
}
