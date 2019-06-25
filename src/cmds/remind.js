const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (message, args) => {
    // Construct the message
    let e = new Discord.RichEmbed()
        .setColor(config.hex)
        .setAuthor(message.client.user.tag)
        .setDescription('Remind yourself that overconfidence is a slow and insidious killer.')
        .setThumbnail(message.client.user.avatarURL);
    message.channel.send({ embed : e });
}