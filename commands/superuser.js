module.exports = {
    name: 'superuser',
    discription: 'lists the current super-users',
    execute(client, message, args) {
        const { SuperUserList } = require('../permissions.json');
        const Discord = require('discord.js');
        try {
            const superuser = new Discord.MessageEmbed()
                .setColor('#0339fc')
                .setTitle('Super-User List')
                .setURL('https://bit.ly/2JMYqCD')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addField('\u200B', `${SuperUserList}`, false)
                .setTimestamp()
                .setFooter('APaperBot Created by dogmoore#0001');
            message.channel.send(superuser);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            console.log(`super-user command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
        }
    }
}