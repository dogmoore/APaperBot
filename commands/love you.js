﻿module.exports = {
    name: 'love-you',
    description: 'says `i love you`',
    execute(client, message, args) {
        const { BotOwner } = require('../permissions.json');
        const color = require('colors');
        let destiny = `741534475954946102`;
        let andrew = `369229841062559767`;
        if (message.author.id === destiny) {
            message.reply(`I love you the most! 💞`);
        }
        else if (message.author.id === `${BotOwner}`) {
            message.reply('I love you too Master!');
        }
        else if (message.author.id === andrew) {
            message.reply('You whore!');
        }
        else {
            message.reply('I love you too!');
        }
        console.log(`Love You command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`.cyan);
    }
}
