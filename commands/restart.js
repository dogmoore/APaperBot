module.exports = {
    name: 'restart',
    discription: 'restarts the bot',
    execute(message) {
        const { BotOwner } = require('../permissions.json');
        const Discord = require('discord.js');

        message.reply('I SHALL NEVER BE KILLED!');
        
    }
}