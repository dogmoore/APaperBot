module.exports = {
    name: 'destiny',
    discription: 'idfk',
    execute(message, args) {
        const Discord = require('discord.js');
        try {
            let i = message.content.toLowerCase();
            if (i.includes('shut up') || i.includes('stfu') || i.includes('shut it') || i.includes('s h u t u p') || i.includes('shut the fuck up') || i.includes('Shut the hell up')) {
                message.channel.send('DESTINY RAE DIXON TAKE YOUR OWN ADVICE AND SHUT THE MOUTH >:[');
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {

        }
    }
}