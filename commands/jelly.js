module.exports = {
    name: 'jelly',
    discription: 'just me being a dick to jelly',
    execute(message, args) {
        const Discord = require('discord.js');
        try {
            if (message.content.includes('>:D')) {
                message.channel.send('Jelly be nice now');
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {

        }
    }
}