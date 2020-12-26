module.exports = {
    name: 'selfping',
    discription: 'idfk',
    execute(message, args) {
        const Discord = require('discord.js');
        try {
            message.reply('politly go fuck yourself');
        }
        catch (err) {
            console.error(err);
        }
        finally {

        }
    }
}