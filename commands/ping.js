module.exports = {
    name: 'ping',
    description: 'ping!',
    async execute(client, message, args) {
        try {
            const Discord = require('discord.js');
            const color = require('colors');
            const client = new Discord.Client();
            const m = await message.channel.send(':loading: **Calculating...**');
            m.edit("...")
            m.delete()
            if (isNaN(message.client.ping)) {
                const embed2 = new Discord.MessageEmbed()
                    .setColor('#0339fc')
                    .setTitle('Latency')
                    .setURL('https://bit.ly/2JMYqCD')
                    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                    .setDescription("━━━━━━━━━━━━━━━━━━━━━")
                    .addField("Bot Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
                    .addField("API Latency", `Not Available`, true)
                    .setTimestamp()
                    .setFooter('APaperBot Created by dogmoore#0001');
                message.channel.send(embed2)
            }
            else {
                const embed = new Discord.MessageEmbed()
                    .setColor('#0339fc')
                    .setTitle('Latency')
                    .setURL('https://bit.ly/2JMYqCD')
                    .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                    .setDescription("━━━━━━━━━━━━━━━━━━━━━")
                    .addField("Bot Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
                    .addField("API Latency", `${Math.round(message.client.ping)}ms`, true)
                    .setTimestamp()
                    .setFooter('APaperBot Created by dogmoore#0001');
                message.channel.send(embed)
            }
        }
        catch (err) {
            console.error(err).red;
        }
        finally {

        }
        console.log(`Ping command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`.cyan);
    }
}
