const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client();
//const { Console } = require('console');
const Logger = require('leekslazylogger');
const log = new Logger;
const eventEmitter = require('events');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const { version } = require('./config.json');
const { SuperUserList } = require('./permissions.json');


var commandLoad;
var eventLoad;
var replyLoad;


client.commands = new Discord.Collection();



function consoleCommands() {
  let help = '';
  rl.question('>>>$', (i) => {
    let x = i.toLowerCase();
    let args = x.slice().trim().split(' ');
    if(x.startsWith('say')) {
      let channelID = args[1];
      let msg = args.shift(2).toString();
      client.channels.cache.get(channelID).send(msg);
      log.console(args);
      consoleCommands();
    }
    else if(x.startsWith('shutdown')) {
      log.console(log.format(`&aVIA CONSOLE\n&6APaperBot is shutting down...`));
      process.exit();
    }
    else if(x.startsWith('restart')) {
      log.console(log.format(`&aVIA CONSOLE\n&6APaperBot is Restarting...`));
      client.destroy();
      //emitter.setMaxListeners(0); //0 means infinite
      client.login(token);
      log.console(log.format('&6APaperBot has restarted!'));
      fileCheck();
      consoleCommands();
    }
    else if(x.startsWith('help')) {
      log.console(log.format('&aVIA CONSOLE\n&bConsole Help Commands\nSay [&fCHANNEL ID&b] [&fMESSAGE&b]\nShutdown\nRestart\nuser [&fsuperuser &b/&f count &b/&f total&b]\nserver\nstatus'));
      consoleCommands();
    }
    else if(x.startsWith('version')) {
      log.console(log.format(`&bCurrent version is [${version}]`));
      consoleCommands();
    }
    else if(x.startsWith('user')) {
      if(args[1] === 'superuser') {
        log.console(log.format(`&bCurrent Super-Users are: ${SuperUserList}`));
        consoleCommands();
      }
      else if(args[1] === 'count') {
        log.console(log.format(`&bTotal members in ${taggedGuild}: ${taggedUsers}`));
        consoleCommands();
      }
      else if(args[1] === 'total') {
        log.console(log.format(`&bTotal cached users: ${cachedUsers}\nTotal guilds: ${cachedGuilds}`));
        consoleCommands();
      }
    }
    else if(x.startsWith('server')) {
      log.console(log.format(`&bTotal Guilds: ${cachedGuilds}`));
      consoleCommands();
    }
    else if(x.startsWith('status')) {
      log.console(log.format(`&b\nEvent load: [${eventLoad}]\nCommand load: [${commandLoad}]\nReply load: [${replyLoad}]`));
      consoleCommands();
    }
    else {
      consoleCommands();
    }
  })
}



function fileCheck() {
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
      commandLoad = 'Something went wrong';
      return;
    };
    jsfile.forEach((f, i) => {
      let props = require(`./commands/${f}`)
      log.console(log.format(`&a${a}: Attempting to load the command '&5${props.name}&a'`));
      client.commands.set(props.name, props);
      a = a + 1;
    });
    log.console(log.format("&6Successfully loaded all commands."))
    commandLoad = 'All good';
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
}



fileCheck();
consoleCommands();

client.login(token);
