module.exports = {
    name: 'kick',
    discription: 'Placeholder1',
    execute(message) {
        const taggedUser = message.mentions.users.first();
        const Discord = require('discord.js');
        if (!message.mentions.users.size) {
            const kickError = new Discord.MessageEmbed()
                .setColor('#0339fc')
                .setTitle('Argument Error')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addField('What the fuck did you do', 'You need to ping someone to kick you cunt!', true)
                .setTimestamp()
                .setFooter('If this is a mistake, go fuck yourself');

            message.channel.send(kickError);
        }
        else {

            message.channel.send(`You wanted to kick ${taggedUser.username}? I don't think I will let you, I like having them around!`);

        }
        console.log(`Kick command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
    }
}