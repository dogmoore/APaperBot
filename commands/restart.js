module.exports = {
  name: 'restart',
  description: 'jokes about restarting the bot',
  execute(client, message, args) {
    const Discord = require('discord.js');
    const color = require('colors');
    message.reply('I SHALL NEVER BE KILLED!');
    console.log(`Joke restart command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`.cyan);
  }
}
