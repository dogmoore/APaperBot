const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./token.json');
const { dashboardtoken } = require('./dashboard.json');
const client = new Discord.Client();
const { Console } = require('console');
const Logger = require('leekslazylogger');
const log = new Logger;
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
        log.console(log.format(`&a${a}: Attempting to load the event '&5${eventName}&a'`));
        a = a + 1;
        client.on(eventName, event.bind(null, client));
    });
    log.console(log.format('&6Successfully loaded all events.'));
    eventLoad = 'All good';
});

fs.readdir("./commands/", (err, files) => {
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        log.console(log.format("&cCouldn't find commands!"));
        cmd = 'Something went wrong';
        return;
    };
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        log.console(log.format(`&a${a}: Attempting to load the command '&5${props.name}&a'`));
        client.commands.set(props.name, props);
        a = a + 1;
    });
    log.console(log.format("&6Successfully loaded all commands."))
    cmd = 'All good';
});

fs.readdir("./replies/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const replies = require(`./replies/${file}`);
        let eventName = file.split(".")[0];
        log.console(log.format(`&a${a}: Attempting to load the event '&5${eventName}&a'`));
        a = a + 1;
        client.on("message", replies.bind(null, client));
    });
    log.console(log.format("&6Successfully loaded all replies"));
    replyLoad = "All good";
});

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.fetch("759170742154690560").channel.send(x.join(" "));
});

client.login(token);
