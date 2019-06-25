const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (message) => {
    // Sleep pictures and gifs
    let isleep = [ 'https://cdn.discordapp.com/attachments/454893252491870219/463645864607350794/6bk6p9SRHsNhNcr7fLSErKxbF1S8-YwTnvU4zzCCg_E.png',
                   'https://media.discordapp.net/attachments/454893252491870219/463642903844093952/r5dzr1rzuj611.jpg',
                   'https://cdn.discordapp.com/attachments/454893252491870219/463642906473922560/b9wcwkvasx311.jpg',
                   'https://cdn.discordapp.com/attachments/454893252491870219/463642955358666754/18_-_d5bLdwX.png',
                    'https://cdn.discordapp.com/attachments/454893252491870219/463905957336842240/it-is-bed-oclock-you-best-be-sleeping-32383548.png' ];
    let sIndex = Math.floor(Math.random() * isleep.length);

    // Construct the message
    let e = new Discord.RichEmbed()
        .setColor(config.hex)
        .setDescription('It\'s time to sleep.')
        .setImage(isleep[sIndex]);
    await message.channel.send({ embed : e });
}