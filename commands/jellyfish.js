module.exports = {
    name: 'jellyfish',
    discription: 'idfk',
    execute(message, args) {
        const Discord = require('discord.js');
        try {
            message.channel.send('go on and bring that smelly bot here, I\'ll fight it and win!\nFUCK JELLYFISH');
            console.log('jellyfish was mentioned\n\n');
        }
        catch (err) {
            console.error(err);
        }
        finally {

        }
    }
}