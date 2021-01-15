module.exports = {
  name: 'user',
  description: 'some user based commands',
  execute(client, message, args) {
    try {
      const moment = require('moment');
      const { BotOwner } = require('../permissions.json');
      const Discord = require('discord.js');
      let aTag = message.mentions.users.first();
      const userInfo = new Discord.MessageEmbed()
          .setColor('#c70606')
          .setTitle(`User info for ${aTag.username}`)

          .addFields(
              { name: `Username:`, value: `${aTag.username}`, inline: true },
              { name: `Tag:`, value: `${aTag.tag}`, inline: true },
              { name: `UserID:`, value: `${aTag.id}` },
              { name: `Account created at:`, value: `${aTag.createdAt}` },
              { name: `Joined this server at:`, value: moment.unix(aTag.joinedAt / 1000).format('llll') },
          )
          .setTimestamp()
          .setFooter('If there is a mistake, go fuck yourself');

      //const Roles = guild.roles;
      let subCommand = args[0];
      if(subCommand == '') {
        message.channel.send('NEEDS ADDING');
      }
      else if(subCommand == 'count') {
        let memberCount = message.guild.members.fetch().then(members => {
          let allCount = members.size;
          let botCount = members.filter(member => member.user.bot).size;
          let userCount = members.filter(member => !member.user.bot).size;

          message.channel.send(`Total members: ${allCount}\nTotal Bots: ${botCount}\nTotal Users: ${userCount}`);
        })
      }
      else if (subCommand == 'info') {

        let avatarURL = aTag.displayAvatarURL({ dynamic: true });
        if (avatarURL !== null) {
          userInfo.setThumbnail(`${avatarURL}`)
        }
        /*const userInfo = new Discord.MessageEmbed()
            .setColor('#c70606')
            .setTitle(`User info for ${aTag.username}`)
            .setThumbnail(`${avatarURL}`)
            .addFields(
                { name: `Username:`, value: `${aTag.username}`, inline: true },
                { name: `Tag:`, value: `${aTag.tag}`, inline: true },
                { name: `UserID:`, value: `${aTag.id}` },
                { name: `Account created at:`, value: `${aTag.createdAt}` },
                { name: `Joined this server at:`, value: `${message.guild.joinedAt}` },
            )
            .setTimestamp()
            .setFooter('If there is a mistake, go fuck yourself');*/
            message.channel.send(userInfo);
      }
    }
    catch (err) {
      console.error(err);
    }
    finally {

    }
  }
}
