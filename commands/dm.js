module.exports = {
    name: 'dm',
    discription: 'Placeholder4',
    execute(message) {
        const Discord = require('discord.js');
        const taggedUser = message.mentions.users.first();
        if (!message.mentions.users.size) {
            const DmError = new Discord.MessageEmbed()
                .setColor('#c70606')
                .setTitle('Argument Error')
                .setURL('https://bit.ly/2JMYqCD')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addField('What the fuck did you do', 'You need to ping someone you want to DM you cunt!', true)
                .setTimestamp()
                .setFooter('If this is a mistake, go fuck yourself');
            message.channel.send(DmError);
        }
        else {
            message.channel.send(`You tried to DM ${taggedUser.username} however I didn't want to`);
        }
        console.log(`DM command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
    }
}