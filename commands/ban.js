module.exports = {
    name: 'ban',
    discription: 'a joke ban command',
    execute(message, args) {
        const taggedUser = message.mentions.users.first();
        const Discord = require('discord.js');
        if (!message.mentions.users.size) {
            const banError = new Discord.MessageEmbed()
                .setColor('#c70606')
                .setTitle('Argument Error')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addField('What the fuck did you do', 'You need to ping someone to ban you cunt!', true)
                .setTimestamp()
                .setFooter('If this is a mistake, go fuck yourself');
            message.channel.send(banError);
        }
        else {
            message.channel.send(`You wanted to ban ${taggedUser.username}? I don't think I will let you, I like having them around!`);
        }
        console.log(`Joke ban command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
    }
}