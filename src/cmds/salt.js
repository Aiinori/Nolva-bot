const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (message) => {
    // Construct the message
    let e = new Discord.RichEmbed()
        .setColor(config.hex)
        .setDescription('Remember kids you can only have 6 grams of salt a day.')
        .setImage('https://cdn.discordapp.com/attachments/454893252491870219/464115118276608010/salt.png');
    await message.channel.send({ embed : e });
}