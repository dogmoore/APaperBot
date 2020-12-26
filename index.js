const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const { token } = require('./token.json');
const emojiRegex = require('emoji-regex/RGI_Emoji.js');
const regex = emojiRegex();
const { BotOwner, GuildOwner } = require('./permissions.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const noPrefixCommands = fs.readdirSync('./non-prefix commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

function connecting() {
    console.log('APaperBot is connecting to Discord...');
    setTimeout(connected, 1500);
}
function connected() {
    console.log('APaperBot is now connected to Discord');
}

client.once('ready', () => {
    setTimeout(connecting, 500);
    client.user.setActivity(`with Paper's emotions`, { type: 'STREAMING', status: 'active' });
});

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);//gets the arguments of a command
    try {

        if (message.author.id === '159985870458322944') {
            client.commands.get('mee6').execute(message, args);
        }
        if (message.author.bot) return;//creates the bot removal
        if (message.mentions.has(client.user)) {
            client.commands.get('selfping').execute(message, args);
            return;
        }
        if (message.content.includes('jellyfish') || message.content.includes('Jellyfish')) {
            cliet.commands.get('jellyfish').execute(message, args);
        }
        if (message.author.id === '278548721778688010' || message.author.id === '410454488885755916') {
            client.commands.get('jelly').execute(message, args);
        }
        if (message.content.includes('waffle')) {
            client.commands.get('waffle').execute(message, args);
        }
    }
    catch (err) {
        console.error(err);
    }
    finally {

    }

    if (!message.content.startsWith(prefix)) return;//creates the prefix demand PREFIX FOUND IN CONFIG

    const commandName = args.shift().toLowerCase();//foces commands to lowercase
    const command = client.commands.get(commandName);//declares commandName

    try {
        switch (commandName) {
            case "love-you":
                command.execute(message);
                break;
            case "testing"://TESTING COMMAND//
                command.execute(message);
                break;
            case "say":
                command.execute(message, args);
                break;
            case "dm":
                command.execute(message);
                break;
            case "kick":
                command.execute(message);
                break;
            case "ban":
                command.execute(message);
                break;
            case "help":
                command.execute(message);
                break;
            case "restart":
                command.execute(message);
                break;

            //MODERATION COMMANDS//
            case "shutdown"://BOT OWNER ONLY//
                command.execute(message, args);
                break;
            case "tkick":
                command.execute(message, args);
                break;
            case "tban":
                command.execute(message, args);
                break;
            case "tsay":
                command.execute(message, args);
                break;
        }
    }
    catch (err) {
        console.error(err);
    }
    finally {

    }
});

client.login(token);
