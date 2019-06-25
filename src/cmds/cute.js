const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (message) => {
    // Construct the message
    let e = new Discord.RichEmbed()
        .setColor(config.hex)
        .setImage('https://data.whicdn.com/images/270284333/original.gif');
    await message.channel.send({ embed : e });
}