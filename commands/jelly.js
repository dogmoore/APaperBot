module.exports = {
    name: 'jelly',
    discription: 'just me being a dick to jelly',
    execute(message, args) {
        const Discord = require('discord.js');
        try {
            if (message.content.includes('>:D')) {
                try {
                    let x = 4;
                    function getRandomInt(max) {
                        return Math.floor(Math.random() * Math.floor(max));
                    }
                    if (getRandomInt(x) == 0) return;
                    else if (getRandomInt(x) == 1) {
                        message.channel.send('Jelly be nice now');
                    }
                    else if (getRandomInt(x) == 2) {
                        message.channel.send('>:D');
                    }
                    else if (getRandomInt(x) == 3) {
                        message.channel.send('feck off jelly');
                    }
                    else {
                        message.channel.send('fuck');
                    }
                }
                catch (err) {
                    console.error(err);
                }
                finally {

                }
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {

        }
    }
}
