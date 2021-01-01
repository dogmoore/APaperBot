module.exports = {
    name: 'testing',
    description: 'a testing command ONLY',
    execute(client, message, args) {
        const Discord = require('discord.js');
        if (!args.length) {

            const embederror = new Discord.MessageEmbed()
                .setColor('#0339fc')
                .setTitle('Argument Error')
                .setThumbnail('https://i.imgur.com/8lRaG6L.png')
                .setTimestamp()
                .setFooter('If this is a mistake, go fuck yourself');

            message.channel.send(embederror);

            //let timestamp = Date.getMonth() + Date.getUTCDay();
            // console.log(timestamp);
        }

        else {
            message.channel.send(`Command name: ${command}\nArguments: ${args}`);
        }
        console.log(`\n\n***WARNING*** Testing command used in server: ${message.guild.name}\n***WARNING*** Issued by: ${message.author.tag}\n\n`);
    }
}
