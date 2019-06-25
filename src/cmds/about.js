const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (message) => {
    // Construct the about informations
    const e = new Discord.RichEmbed()
        .setColor(config.hex)
        .setAuthor(message.client.user.tag)
        .setDescription('Made by <@157139199328387072> with ❤️')
        .setThumbnail(message.client.user.avatarURL)
        .setTimestamp();
    message.channel.send({ embed: e });
}