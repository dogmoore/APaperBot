module.exports = {
    name: 'waffle',
    discription: 'idfk',
    execute(message, args) {
        const Discord = require('discord.js');
        try {
            message.channel.send('WAFFIE!');
            console.log('waffle was mentioned\n\n');
        }
        catch (err) {
            console.error(err);
        }
        finally {

        }
    }
}