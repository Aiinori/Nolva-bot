const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (message, args) => {
    // Construct the message
    let e = new Discord.RichEmbed().setColor(config.hex);
    if(args.length < 1) {
        e.setDescription(`<@${message.author.id}> I'm here don't be sad!`)
    }
    else {
        // If not a mention
        if(!args[0].startsWith('<@')) {
            e.setDescription('Mention them for me to cheer them up!');
        } 
        else {
            // List of cheers
            let hugMessage = [ `Don't worry ${args}! It's going to be okay~`,
                               `There there ${args}, I'm here.`, 
                               `I'm here ${args}, don't be sad.`, 
                               `Awh ${args}, you will be okay.` ];
            let hIndex = Math.floor((Math.random() * hugMessage.length));
            e.setDescription(hugMessage[hIndex]);
        }
    } 
    message.channel.send({ embed : e });
}