const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./token.json');
const { dashboardtoken } = require('./dashboard.json');
const client = new Discord.Client();
const botdash = require('botdash.pro');
const { Console } = require('console');
const color = require('colors');
var commandLoad;
var eventLoad;
var replyLoad;
client.commands = new Discord.Collection();

var dashboard = "";
dashboard = new botdash.APIclient(dashboardtoken);

color.setTheme({
  logColor: 'magenta bold italic',
  errorColor: 'red'
});

let a = 1
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(a + `: Attempting to load the event '${eventName}'`.logColor);
        a = a + 1;
        client.on(eventName, event.bind(null, client));
    });
    console.log('Successfully loaded all events.'.logColor);
    eventLoad = 'All good';
});

fs.readdir("./commands/", (err, files) => {
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands!".errorColor);
        cmd = 'Something went wrong';
        return;
    };
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(a + `: Attempting to load the command '${props.name}'`.logColor)
        client.commands.set(props.name, props);
        a = a + 1;
    });
    console.log("Successfully loaded all commands.".logColor);
    cmd = 'All good';
});

fs.readdir("./replies/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const replies = require(`./replies/${file}`);
        let eventName = file.split(".")[0];
        console.log(a + `: Attempting to load the event '${eventName}'`.logColor);
        a = a + 1;
        client.on("message", replies.bind(null, client));
    });
    console.log("Successfully loaded all replies".logColor);
    replyLoad = "All good";
});

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.fetch("759170742154690560").channel.send(x.join(" "));
});

client.login(token);
