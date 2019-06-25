const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (message) => {
    // Construct initial message
    let e = new Discord.RichEmbed().setColor(config.hex).setDescription('Pinging...');

    // Pinging and editing the message
    message.channel
        .send({ embed : e })
        .then(newMessage => {
            e.setTitle('Pong! 🏓')
             .setDescription(`${newMessage.createdTimestamp - message.createdTimestamp} ms`);
            newMessage.edit({ embed : e });
        });
}