const config = require('../config.json');
const Discord = require('discord.js');
const color = require('colors');
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
  console.log(`APaperBot [v${config.version}] is now connected!`.yellow.bold);
  console.log(`You are running version ${config.version}!`.yellow.bold);
  // console.log(`${client.users.keyArray().length} Users Online!`);
  // console.log(`${client.guilds.keyArray().length} Guilds!`);
}
