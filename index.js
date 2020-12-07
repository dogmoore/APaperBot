const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('ready!');
    client.user.setActivity(`paper sleep!`, { type: 'WATCHING', status: 'idle' });
});


client.login(token);

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'server') {
        client.commands.get('server').execute(message);
    }

    //start testing command
    else if (command === 'testing') {
        client.commands.get('testing').execute(message, args);
    }
    //end testing command

    else if (command === 'say') {
        client.commands.get('say').execute(message, args);
    }

    else if (command === 'dm') {
        client.commands.get('dm').execute(message);
    }

    else if (command === 'kick') {
        client.commands.get('kick').execute(message);
    }

    else if (command === 'shutdown') {
        client.commands.get('shutdown').execute(message);
    }

    else if (command === 'love_you') {
        client.commands.get('love you').execute(message);
    }

    else if (command === 'help') {
        client.commands.get('help').execute(message);
    }
});
