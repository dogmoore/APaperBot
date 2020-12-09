module.exports = {
    name: 'shutdown',
    discription: 'Placeholder3',
    execute(message) {
        const Discord = require('discord.js');
        const { BotOwner, GuildOwner } = require('../permissions.json');
        if (message.author.id === `${BotOwner}`) {

            console.log(`Shutdown command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
            console.log('shutting down...');
            message.reply('You fucking killed me!');
            setTimeout(() => { process.exit(); }, 2000);
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
