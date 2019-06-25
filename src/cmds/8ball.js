const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (message, args) => {
    
    // Selecting the answer subfix
    let sub = [ 'darling', 'dear', 'love' ];
    let sIndex = Math.floor((Math.random() * sub.length));

    let e = new Discord.RichEmbed().setColor(config.hex);
    
    // If there are no arguments
    if(args.length < 1) {
        e.setDescription('You have to ask me a question, my ' + sub[sIndex] + '.')
    }
    
    // If argument doesn't end with a question mark
    if(!args[args.length - 1].endsWith('?')) {
        e.setDescription('That\'s not a question, my ' + sub[sIndex] + '.');
    } 
    else {
        // List of answers
        let replies = [ 'It is certain', 'Yes', 'Most likely',
                        'Ask again later', 'Better not tell you now', 'Same',
                        'No', 'Very doubtful', 'Don\'t count on it' ];
        let rIndex = Math.floor((Math.random() * replies.length));
        
        // Generate question and answer
        let question = args.join(' ');
        let answer = replies[rIndex] + ', my ' + sub[sIndex] + '.';
        
        // Construct the reply message
        e.setAuthor(message.author.tag)
         .setColor(config.hex)
         .setThumbnail(message.client.user.displayAvatarURL)
         .addField('Question: ', question)
         .addField('Answer: ', answer);      
    };
    message.channel.send({ embed: e }); 
}