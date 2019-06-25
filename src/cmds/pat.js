const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (message, args) => {
    // Patting pictures and gifs
    let patting = [ 'https://cdn.discordapp.com/attachments/454370087525154818/463611689657434112/sy61.png',
                    'https://cdn.discordapp.com/attachments/454370087525154818/463611951810084864/5x7AgGP.png',
                    'https://cdn.discordapp.com/attachments/454370087525154818/463612225714782208/15dxnt372kw01.gif',
                    'https://cdn.discordapp.com/attachments/454370087525154818/463612209432625153/Hug.gif',
                    'https://cdn.discordapp.com/attachments/454893252491870219/463614947151183873/12a2g.jpg',
                    'https://cdn.discordapp.com/attachments/454893252491870219/463614956768854016/u6Jg8Pg.png' ];
    let pIndex = Math.floor(Math.random() * patting.length);

    // Construct the message
    let e = new Discord.RichEmbed()
        .setColor(config.hex)
        .setDescription('Don\'t worry~' )
        .setImage(patting[pIndex]);

    if(args.length > 0) {
        // If not a mention 
        if(!args[0].startsWith('<@')) {
            e.setDescription('Mention them for me to pat them!');
        }
        else {
            //Special double pat picture
            if(args.length === 2) {
                e.setImage('https://cdn.discordapp.com/attachments/454893252491870219/463614952104787968/RXIf0Rz.png')
                 .setDescription(`Awwh ${args[0]}, ${args[1]} you two!`);
            }
            else {
                e.setDescription(`Heyyyy there ${args.join(', ')} I'm here!`);
            };    
        }
    };
    await message.channel.send({ embed : e });
}