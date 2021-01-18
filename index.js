const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client();
var commandLoad;
var eventLoad;
var replyLoad;
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
    console.log('Successfully loaded all events.');
    eventLoad = 'All good';
});

fs.readdir("./commands/", (err, files) => {
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands!");
        cmd = 'Something went wrong';
        return;
    };
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(a + `: Attempting to load the command '${props.name}'`)
        client.commands.set(props.name, props);
        a = a + 1;
    });
    console.log("Successfully loaded all commands.");
    cmd = 'All good';
});

fs.readdir("./replies/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const replies = require(`./replies/${file}`);
        let eventName = file.split(".")[0];
        console.log(a + `: Attempting to load the event '${eventName}'`);
        a = a + 1;
        client.on("message", replies.bind(null, client));
    });
    console.log("Successfully loaded all replies");
    replyLoad = "All good";
});

client.login(token);
