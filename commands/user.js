module.exports = {
  name: 'user',
  description: 'some user based commands',
  execute(client, message, args) {
    try {

      const { BotOwner } = require('../permissions.json');
      const Discord = require('discord.js');
      let aTag = message.mentions.users.first();
      const moment = require('moment');
      let timestamp = moment().format("MMM-DD-YYYY");
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

        let createDateRaw = aTag.createdTimestamp.toString();
        let createDate2 = moment.unix(createDateRaw / 1000).format('llll').toString();
        let createDate = createDate2.substring(0, createDateRaw.length+3);

        let joinDateRaw = aTag.joinedTimestamp//.toString();
        let joinDate2 = moment.unix(joinDateRaw / 1000).format('1111')//.toString();
        //let joinDate = joinDate2.substring(0, joinDateRaw.length+3);

        const userInfo = new Discord.MessageEmbed()
        .setColor('#c70606')
        .setTitle(`User info for ${aTag.username}`)
        .addFields(
          { name: `Username:`, value: aTag.username, inline: true },
          { name: `Tag:`, value: aTag.tag, inline: true },
          { name: `UserID:`, value: aTag.id },
          { name: `Account created at:`, value: createDate },
          { name: `Joined this server at:`, value: 'I can\'t be bothered to find this' },
        )
        .setTimestamp()
        .setFooter('If there is a mistake, go fuck yourself');
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
