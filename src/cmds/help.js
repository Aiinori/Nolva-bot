const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (message) => {
    // Map of commands, sorted by catagories and alphabeticalically    
    const cmd = {
        'Bot' : [
            'about',
            'help',
            'ping',
            'userinfo',
            '8ball'
        ],
        // 'Gamble' : [
        //     'bet',
        //     'broke',
        //     'coin',
        //     'shame'
        // ],
        'Memes' : [
            'hack',
            'nice',
            'oow',
            'police',
            'salt',
            'sleep'
        ],
        // 'Music (experimental)' : [
        //     'play',
        //     'skip',
        //     'stop'
        // ],
        'Interactions' : [
            'cheer',
            'cute',
            'hug',
            'pat'
        ]
    };
    // Construct the message    
    let e = new Discord.RichEmbed()
        .setColor(config.hex)
        .setTitle('Here are the things that I can do!')
        .setDescription(`Prefix: ${config.prefix} for ${message.client.user}`)
        .setThumbnail(message.client.user.avatarURL);

        Object.keys(cmd).map(currentValue => {
            return e.addField(currentValue, cmd[currentValue].join(', '))
        });
        message.channel.send({ embed : e });
}