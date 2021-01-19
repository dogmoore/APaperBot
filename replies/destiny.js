module.exports = (client, message) => {
  const Discord = require('discord.js');
  try {
    if (message.author.id === '741534475954946102' || message.author.id === '376857933067321366') {
      let i = message.content.toLowerCase();
      if (i.includes('shut up') || i.includes('stfu') || i.includes('shut it') || i.includes('s h u t u p') || i.includes('shut the fuck up') || i.includes('Shut the hell up')) {
        message.channel.send('DESTINY RAE DIXON TAKE YOUR OWN ADVICE AND SHUT THE MOUTH >:[');
        console.log('prefixless command \'Destiny\' was issued\n'.green);
      }
    }
  }
  catch (err) {
    console.error(err.red);
  }
  finally {
  }
}
