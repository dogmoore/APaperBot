module.exports = {
    name: 'tban',
    discription: 'actually ban',
    execute(client, message, args) {
        const Discord = require('discord.js');
        const { Admin } = require('../permissions.json');
        const member = message.mentions.members.first();
        try {
            if (member === undefined) return;
            if (`${Admin}`.includes(message.author.id)) {
                if (message.content.substring[4] === '') {
                    const banError = new Discord.MessageEmbed()
                        .setColor('#c70606')
                        .setTitle('Argument Error')
                        .setURL('https://bit.ly/2JMYqCD')
                        .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                        .addField('If you want to ban someone, ping them!', '\u200B', true)
                        .setTimestamp()
                        .setFooter('APaperBot Created by dogmoore#0001');
                    message.channel.send(banError);
                }
                else if (member !== `${Admin}`.includes(message.author.id)) {
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
                else if (`${Admin}`.includes(message.author.id)) {
                    const banError2 = new Discord.MessageEmbed()
                        .setColor('#c70606')
                        .setTitle('Argument Error')
                        .setURL('https://bit.ly/2JMYqCD')
                        .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                        .addField('You can not ban this person', '\u200B', true)
                        .setTimestamp()
                        .setFooter('APaperBot Created by dogmoore#0001');
                    message.channel.send(banError2);
                }
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
        catch (err) {
            console.log(err);
        }
        finally {
            
        }
    }
}
/*
else if (`${Admin}`.includes(message.author.id)) {
                    const banError2 = new Discord.MessageEmbed()
                        .setColor('#c70606')
                        .setTitle('Argument Error')
                        .setURL('https://bit.ly/2JMYqCD')
                        .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                        .addField('You can not ban this person', '\u200B', true)
                        .setTimestamp()
                        .setFooter('APaperBot Created by dogmoore#0001');

                    message.channel.send(banError2);
                }
*/
