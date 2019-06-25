const config = require('../config.json');
const Discord = require('discord.js');

const { collectCommands, } = require('../utils/collectCommands');

module.exports = (message, queue) => {
    // ignore bot messages and messages not from guild text channels
    if (message.author.bot || message.channel.type !== 'text') {
      return;
    }
    collectCommands(message);
}
