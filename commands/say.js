module.exports = {
    name: 'say',
    discription: 'placeholder8',
    execute(message, args) {
        let dog = '376857933067321366';
        const owner = message.guild.owner;
        const Discord = require('discord.js');
        let  success = ` `;
        if (message.author.id === `${dog}` || `${owner}`) {

            if (!args.length) {
                message.delete();
                return;
            }
            else {
                let sendMessage = message.content.substring(4);
                
                message.channel.send(`${sendMessage}`);
                message.delete();

                success = `success`;
            }
        }
        else {
            const sayError = new Discord.MessageEmbed()
                .setColor('#0339fc')
                .setTitle('Permission Error')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addField('You do not have Permission to use this command', 'Please go fuck yourself', true)
                .setTimestamp()
                .setFooter('APaperBot Created by dogmoore#0001');

            message.channel.send(sayError);
            success = `failure`;
        }
        console.log(`Say command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n${success}\n\n`);
    }
}
