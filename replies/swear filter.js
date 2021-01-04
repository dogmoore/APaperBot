module.exports = (client, message) => {
  const Discord = require('discord.js');
  const { prefix } = require('../config.json');
  try {
    let i = message.content.toLowerCase();
    if (message.author.bot) return;
    if(message.content.startsWith(`${prefix}`)) return;
    if(message.content.startsWith('bb') || message.content.startsWith('d!') || message.content.startsWith('?') || message.content.startsWith('!')) return;
    else if (i.includes("fuck")||i.includes("sex")||i.includes("damn")||i.includes("hell")||i.includes("shut up")||i.includes("cunt")||i.includes("pussy")||i.includes("asshole")||i.includes("ass")) {
      message.reply('Please watch your fucking language')
    }
  }
  catch (err) {
    console.error(err);
  }
  finally {

  }
}
