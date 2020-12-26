const Discord = require('discord.js');
const message = new Discord.Message();
try {
    if (guild.available) {
        const AllRoles = new Array(`${message.guild.roles.fetch()}`);
    }
}
catch (error) {
    console.log('role fetch failed');
}
