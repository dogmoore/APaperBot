const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

let a = 1
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(a + `: Attempting to load the event '${eventName}'`);
        a = a + 1;
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands!")
        return;
    };
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(a + `: Attempting to load the command '${props.name}'`)
        client.commands.set(props.name, props);
        a = a + 1;
    });
    console.log("Successfully loaded all commands.")
});

// client.on('message', message => {
//     const args = message.content.slice(prefix.length).trim().split(/ +/);//gets the arguments of a command
//     try {
//         if (message.author.id === '159985870458322944'/*mee6's id*/) {
//             client.commands.get('mee6').execute(message, args);
//         }
//         if (message.author.bot) return;//creates the bot removal
//         if (message.mentions.has(client.user)) {
//             client.commands.get('selfping').execute(message, args);
//             return;
//         }
//         if (message.author.id === '741534475954946102' || message.author.id === '376857933067321366') {
//             client.commands.get('destiny').execute(message);
//         }
//         if (message.content.includes('jellyfish') || message.content.includes('Jellyfish')) {
//             client.commands.get('jellyfish').execute(message, args);
//         }
//         if (message.author.id === '278548721778688010' || message.author.id === '410454488885755916' || message.author.id === '376857933067321366') {
//             client.commands.get('jelly').execute(message, args);
//         }
//         if (message.content.includes('waffle') || message.content.includes('WAFFLE')) {
//             client.commands.get('waffle').execute(message, args);
//         }
//         if (message.author.id === '669436598886072320') {
//             client.commands.get('eden').execute(messsage);
//         }
//     }
//     catch (err) {
//         console.error(err);
//     }
//     finally {
//
//     }
//     if (!message.content.startsWith(prefix)) return;//creates the prefix demand PREFIX FOUND IN CONFIG
//     const commandName = args.shift().toLowerCase();//forces commands to lowercase
//     const command = client.commands.get(commandName);//declares commandName
//     try {
//         switch (commandName) {
//             case "love-you":
//                 return command.execute(message);
//             case "testing"://TESTING COMMAND//
//                 return command.execute(message);
//             case "say":
//                 return command.execute(message, args);
//             case "dm":
//                 return command.execute(message);
//             case "kick":
//                 return command.execute(message);
//             case "ban":
//                 return command.execute(message);
//             case "help":
//                 return command.execute(message);
//             case "restart":
//                 return command.execute(message);
//             case "ping":
//                 return command.execute(message);
//             case "server":
//                 return command.execute(message);
//             case "superuser":
//                 return command.execute(message);
//             //MODERATION COMMANDS//
//             case "shutdown"://SUPER-USER ONLY//
//                 return command.execute(message, args);
//             case "tkick":
//                 return command.execute(message, args);
//             case "tban":
//                 return command.execute(message, args);
//             case "tsay"://DOESN'T WORK CURRENTLY//
//                 return command.execute(message, args);
//         }
//     }
//     catch (err) {
//         console.error(err);
//     }
//     finally {
//
//     }
// });

client.login(token);
