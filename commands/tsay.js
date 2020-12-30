module.exports = {
    name: 'say',
    discription: 'Makes the bot say something',
    execute(client, message, args) {
        let dog = '376857933067321366';
        
        const Discord = require('discord.js');
        let  success = ` `;
        if (message.author.id === dog) {

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
            const permissionError = new Discord.MessageEmbed()
                .setColor('#c70606')
                .setTitle('Permission Error')
                .setURL('https://bit.ly/2JMYqCD')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addField('You do not have permissions for this command', 'Currently only the bot owner `dogmoore#0001` has access', false)
                .setTimestamp()
                .setFooter('APaperBot Created by dogmoore#0001');
            message.channel.send(permissionError);
            success = `failure`;
        }
        console.log(`Say command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n${success}\n\n`);
    }
}
