const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { BotOwner, GuildOwner } = require('./permissions.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('***APaperBot is active!***');
    client.user.setActivity(`paper sleep!`, { type: 'WATCHING', status: 'idle' });
});

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    try {
        if (commandName === 'love-you') {
            command.execute(message);
        }

        //start testing command
        else if (commandName === 'testing') {
            command.execute(message, args);
        }
        //end testing command

        else if (commandName === 'say') {
            command.execute(message, args);
        }

        else if (commandName === 'dm') {
            command.execute(message);
        }

        else if (commandName === 'kick') {
            command.execute(message);
        }

        else if (commandName === 'shutdown') {
            command.execute(message);
        }

        else if (commandName === 'server') {
            command.execute(message);
        }

        else if (commandName === 'help') {
            command.execute(message);
        }
    }
    catch(err) {
        console.log('command failed');
    }
    finally {
        
    }


});

client.login(token);
