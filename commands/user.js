module.exports = {
  name: 'user',
  description: 'some user based commands',
  execute(client, message, args) {
    try {
      console.log('a');
      const { BotOwner } = require('../permissions.json');
      const Discord = require('discord.js');
      //const Roles = guild.roles;
      //const AGuild = client.guild.get('793674144910147616');
      let subCommand = args[0];
      if(subCommand == '') {
        console.log('failed');
      }
      else if(subCommand == 'count') {
        console.log('b');
        let memberCount = message.guild.memberCount;
        let botCount = message.guild.members.cache.filter( member => member.user.bot ).size;
        //let userCount = message.guild.members.cache.filter( member => !member.user.bot ).size;
        const guild = client.guild.fetch(message.channel.guild.id);
        let userCount = guild.members.filter(member => !member.user.bot).size;
        message.channel.send(`Total members: ${memberCount}\nTotal Bots: ${botCount}\nTotal Users: ${userCount}`);
      }
    }
    catch (err) {
      console.error(err);
    }
    finally {
      //message.channel.send(args);
    }
  }
}
