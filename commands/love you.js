module.exports = {
    name: 'love-you',
    description: 'says `i love you`',
    execute(client, message, args) {
        const { BotOwner } = require('../permissions.json');
        const Logger = require('leekslazylogger');
        const log = new Logger;
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
        log.console(log.format(`&bLove You command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`));
    }
}
