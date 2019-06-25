const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (message) => {
    // Construct the message
    let e = new Discord.RichEmbed()
        .setColor(config.hex)
        .setImage('https://media3.giphy.com/media/yJFeycRK2DB4c/giphy.gif');
    await message.channel.send({ embed : e });
}