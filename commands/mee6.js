module.exports = {
    name: 'mee6',
    discription: 'idfk',
    execute(message, args) {
        const Discord = require('discord.js');
        let emote = "🤨";
        let mee6 = `:face_with_raised_eyebrow:787063537678942239`;
        try {
            if (message.author.id === '159985870458322944') {
                let channelID = message.channel.id;
                if (channelID === '759177774870036480') {
                    message.reply('fuck off');
                    console.log('mee6 said something\n\n');
                }
            }
            else if (message.content.includes(emote)) {
                message.channel.send(emote);
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {

        }
    }
}