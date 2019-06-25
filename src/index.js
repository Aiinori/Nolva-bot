const Discord = require('discord.js');
const config = require('./config.json');
const mysql = require('mysql');

//Bot
const bot = new Discord.Client();


let servers = {};

require('./utils/loadEvents.js')(bot);

bot.login(config.token);

module.exports.servers = servers;