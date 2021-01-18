module.exports = {
  name: 'status',
  description: 'bot\'s status',
  execute(client, message, args) {
    const { commandLoad, eventLoad, replyLoad } = require('../index.js');
    const Discord = require('discord.js');
    /*const statusReport = new Discord.MessageEmbed()
    .setColor('#c70606')
    .setTitle(`Status check`)
    .addFields(
      { name: `Commands`, value: commandLoad, inline: false },
      { name: `Events`, value: eventLoad, inline: false },
      { name: `Replies`, value: replyLoad, inline: false },
    )
    .setTimestamp()
  message.channel.send(statusReport);*/
  let uptimeraw = client.uptime;
  let uptime = ((uptimeraw / 1000)/60).toFixed(2);
  message.channel.send(`ONLINE FOR ${uptime} MINUTES`);
  }
}
