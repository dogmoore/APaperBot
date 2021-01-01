module.exports = {
    name: 'shutdown',
    dscription: 'Shuts down the bot',
    execute(client, message, args) {
        const Discord = require('discord.js');
        const { SuperUserID } = require('../permissions.json');
        const { prefix } = require('../config.json');
        try {
            if (message.author.id === `${SuperUserID}`) {
                console.log(`Shutdown command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
                console.log('shutting down...');
                message.reply('You fucking killed me!');
                // setTimeout(() => { process.exit(); }, 2000);
            }
            else {
                const permissionError = new Discord.MessageEmbed()
                    .setColor('#c70606')
                    .setTitle('Permission Error')
                    .setURL('https://bit.ly/2JMYqCD')
                    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                    .addField('You do not have permissions for this command', 'This is a Super-User only command', false)
                    .addField('', `To see the super-user list run \`${prefix}superuser\``)
                    .setTimestamp()
                    .setFooter('APaperBot Created by dogmoore#0001');
                message.channel.send(permissionError);
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {

        }
    }
}
