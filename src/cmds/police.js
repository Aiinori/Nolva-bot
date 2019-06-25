const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (message) => {
    let police = ['https://imgur.com/gallery/xAQw8pK',
                  'https://cdn.discordapp.com/attachments/454893252491870219/464119250710167561/NIpCzxp.jpg' ];
    let pIndex = Math.floor(Math.random() * police.length);

    // Construct the message    
    let e = new Discord.RichEmbed()
        .setColor(config.hex)
        .setTitle('FBI OPEN UP')
        .setImage(police[pIndex]);
    await message.channel.send({ embed : e });
}