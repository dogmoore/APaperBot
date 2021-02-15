module.exports = {
  name: 'version',
  description: 'says the current version',
  execute(client, message, args) {
    const Discord = require('discord.js');
    const Logger = require('leekslazylogger');
    const log = new Logger;
    const { version } = require('../config.json');
    message.channel.send(`Current Bot version is: v${version}`);
    log.console(log.format(`&bVersion command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`));
  }
}
