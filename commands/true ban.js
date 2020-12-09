module.exports = {
    name: 'tban',
    discription: 'actually ban',
    execute(message, args) {
        const Discord = require('discord.js');
        const { BotOwner } = require('../permissions.json');
        const member = message.mentions.members.first();
        //let member2 = message.mentions.members.id();
        if (message.author.id === `${BotOwner}`) {
            const ban = new Discord.MessageEmbed()
                .setColor('#0339fc')
                .setTitle('APaperModerator')
                .setURL('https://bit.ly/2JMYqCD')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addFields(
                    { name: `User ${member} was ban from ${message.guild.name}!`, value: '\u200B' },

                )
                .setTimestamp()
                .setFooter('APaperBot Created by dogmoore#0001');
            message.channel.send(ban);
            //member.ban(member);
        }
        else {
            const permissionError = new Discord.MessageEmbed()
                .setColor('#c70606')
                .setTitle('Permission Error')
                .setURL('https://bit.ly/2JMYqCD')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addField('You do not have permissions for this command', 'Currently only the bot owner `dogmoore#0001` has access', false)
                .setTimestamp()
                .setFooter('APaperBot Created by dogmoore#0001');
            message.channel.send(permissionError);

        }
    }
}
