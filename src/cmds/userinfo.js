const Discord = require("discord.js");
const config = require('../config.json');

exports.run = (message, args) => {
    // Construct user info message
    let e = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.hex)
        .setTitle('User Info')
        .setThumbnail(message.author.displayAvatarURL)
        .addField('Full Username:', message.author.tag)
        .addField('ID', message.author.id)
        .addField('Created at', message.author.createdAt);    
    message.channel.send({ embed : e });
}