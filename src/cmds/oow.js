const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (message) => {
    // Construct the message
    let e = new Discord.RichEmbed()
        .setColor(config.hex)
        .setImage('https://cdn.discordapp.com/attachments/454370087525154818/463368068966383617/Screen_Shot_2018-04-24_at_20.08.22.png');
    await message.channel.send({ embed : e });
}