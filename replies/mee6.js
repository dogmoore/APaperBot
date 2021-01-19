module.exports = (client, message) => {
  const Discord = require('discord.js');
  const color = require('colors');
  let emote = "🤨";
  let mee6 = `:face_with_raised_eyebrow:787063537678942239`;
  try {
    if (message.author.id === '159985870458322944'/*mee6's id*/) {
      if (message.author.id === '159985870458322944') {
        let channelID = message.channel.id;
        if (channelID === '759177774870036480') {
          message.reply('fuck off');
          console.log('prefixless command \'Mee6\'was issued\n'.green);
        }
      }
      else if (message.content.includes(emote)) {
        message.channel.send(emote);
      }
    }
  }
  catch (err) {
    console.error(err.red);
  }
  finally {

  }
}
