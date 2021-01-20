const config = require('../config.json');
const Discord = require('discord.js');
const Logger = require('leekslazylogger');
const log = new Logger;
const fs = require("fs");

const client = new Discord.Client();

function connecting() {
  console.log('APaperBot is connecting to Discord...');
  setTimeout(connected, 1500);
}

function connected() {
  console.log('APaperBot is now connected to Discord');
}

module.exports = async client => {
  client.user.setActivity(`with Paper's emotions`, { type: 'STREAMING', status: 'active' });
  log.console(log.format(`&6APaperBot [v${config.version}] is now connected!`));
  log.console(log.format(`&6You are running version ${config.version}!`));
  // console.log(`${client.users.keyArray().length} Users Online!`);
  // console.log(`${client.guilds.keyArray().length} Guilds!`);
}
