module.exports = {
    name: 'server',
    description: 'says Guild name and member count',
    execute(client, message, args) {
      const Logger = require('leekslazylogger');
      const log = new Logger;
        message.channel.send(`This horrible server's name is: ${message.guild.name}\nTotal whor- I mean members: ${message.guild.memberCount}`);
        log.console(log.format(`&bServer command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n`));
    }
}
