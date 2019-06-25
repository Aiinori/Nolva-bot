const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (message, args) => {
    // List of hugging pictures and gifs
    let hugging = [ 'https://cdn.discordapp.com/attachments/454370087525154818/463610499712548874/tumblr_mxre7hEX4h1sc1kfto1_500.gif',
                    'https://media.discordapp.net/attachments/454370087525154818/463594729012068362/anime-gif-hug-6.gif',
                    'https://cdn.discordapp.com/attachments/454893252491870219/463673810399395841/BP0RVJt.png',
                    'https://cdn.discordapp.com/attachments/454893252491870219/463712622118961152/tumblr_ngxxivVcQx1u57npgo1_500.gif',
                    'https://cdn.discordapp.com/attachments/454893252491870219/463712671267815434/VWiN.gif',
                    'https://cdn.discordapp.com/attachments/454893252491870219/463713017889161247/tenor.gif',
                    'https://cdn.discordapp.com/attachments/454893252491870219/463713098272997376/Serious_Chino_Hugging.gif',
                    'https://cdn.discordapp.com/attachments/263646241160822785/464640629209694209/7XusAup.png' ];
    let hIndex = Math.floor(Math.random() * hugging.length);
    
    // Construct the message
    let e = new Discord.RichEmbed()
        .setColor(config.hex)
        .setDescription('Here I am!')
        .setImage(hugging[hIndex]);
    
        if(args.length > 0) { 
            // If not a mention
            if(!args[0].startsWith('<@')) {
                e.setDescription('Mention them for me to hug them!');
            }
            else {
                e.setDescription(`Come hereee ${args[0]}!`)
            };
        };
    await message.channel.send({ embed : e });
}