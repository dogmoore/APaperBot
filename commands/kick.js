module.exports = {
    name: 'kick',
    description: 'joke kick',
    execute(client, message, args) {
        const taggedUser = message.mentions.users.first();
        const Discord = require('discord.js');
        const color = require('colors');
        if (!message.mentions.users.size) {
            const kickError = new Discord.MessageEmbed()
                .setColor('#c70606')
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
        console.log(`Joke kick command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`.cyan);
    }
}
