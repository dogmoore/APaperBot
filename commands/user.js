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
        let memberCount = message.guild.members.fetch().then(members => {
          let allCount = members.size;
          let botCount = members.filter(member => member.user.bot).size;
          let userCount = members.filter(member => !member.user.bot).size;

          message.channel.send(`Total members: ${allCount}\nTotal Bots: ${botCount}\nTotal Users: ${userCount}`);
        })


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
