const config = require('../config.json');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');
let servers = require('../index');

exports.run = (message, args) => {
    let server = servers[message.guild.id];
    
    // console.log(typeof message.guild.voiceConnection);

    if (message.guild.voiceConnection) { 
        message.guild.voiceConnection.disconnect();
    }    
};