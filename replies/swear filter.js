module.exports = (client, message) => {
  const Discord = require('discord.js');
  const { prefix } = require('../config.json');
  try {
    let i = message.content.toLowerCase();
    if (message.author.bot) return;
    else if(message.content.startsWith(`${prefix}`)) return;
    else if(message.content.startsWith('bb') || message.content.startsWith('d!') || message.content.startsWith('?') || message.content.startsWith('!') || message.content.startsWith('-')) return;
    else if (message.channel.id == '759172935445119057') return;
    else if (message.guild.id == '319984688439623681') return;
    else if (i.includes(" fuck")||i.includes(" sex")||i.includes(" damn")||i.includes(" hell")||i.includes(" shut up")||i.includes(" cunt")||i.includes(" pussy")||i.includes(" asshole")||i.includes("ass")) {
      message.reply('Please watch your fucking language in this channel')
    }
  }
  catch (err) {
    console.error(err);
  }
  finally {

  }
}
