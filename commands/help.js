module.exports = {
    name: 'help',
    discription: 'placeholder6',
    execute(message) {
        const Discord = require('discord.js');
        const { Admin} = require('../permissions.json');
        const GuildOwner = message.guild.owner;
        const { prefix } = require('../config.json');
        //const IDcheck = Admin.find(message)
        if (`${Admin}`.includes(message.author.id)) {
            const Help = new Discord.MessageEmbed()
                .setColor('#0339fc')
                .setTitle('Bot commands')
                .setURL('https://bit.ly/2JMYqCD')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addFields(
                    { name: `${prefix}kick`, value: 'Makes a joke about the bot kicking someone' },
                    { name: `${prefix}ban`, value: 'Makes a joke about the bot banning someone' },
                    { name: `${prefix}dm`, value: 'Makes a joke about the bot DMing someone' },
                    { name: `${prefix}server`, value: 'Used to say the server name and current member count' },
                    { name: `${prefix}love-you`, value: 'Makes the bot say `@ user, I Love You`' },
                    { name: `${prefix}tkick`, value: 'Actually kick someone from the server!' },
                    { name: `${prefix}tban`, value: 'Actually ban someone from the server!' },
                    { name: `${prefix}say`, value: 'Make the bot speak' },
                    { name: `${prefix}shutdown`, value:'Turns off the bot SUPER-USERS ONLY'},
                )
                .setTimestamp()
                .setFooter('APaperBot Created by dogmoore#0001');
            console.log(`Admin help command used in server: ${message.guild.name}\nIssued by owner: ${message.author.tag}\n\n`);
            message.channel.send(Help);
        }
        else {
            if (message.author === GuildOwner) {
                message.channel.send('Ask dogmoore to add your userID to the permissions file if you wish access Admin commands');
            }
            const Help = new Discord.MessageEmbed()
                .setColor('#0339fc')
                .setTitle('Bot commands')
                .setURL('https://bit.ly/2JMYqCD')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .addFields(
                    { name: `${prefix}kick`, value: 'Ping someone to kick them' },
                    { name: `${prefix}ban`, value: 'Ping someone to ban them' },
                    { name: `${prefix}dm`, value: 'Ping someone to DM them' },
                    { name: `${prefix}server`, value: 'Used to say the server name and current member count' },
                    { name: `${prefix}love-you`, value: 'To find out if I love you' },
                )
                .setTimestamp()
                .setFooter('APaperBot Created by dogmoore#0001');
            console.log(`Help command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
            message.channel.send(Help);
        }
    }
}
