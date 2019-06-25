const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    collectCommands: (message, queue) => {
        // Parsing the message and set up variables
        const mentionRegExp = RegExp(`^<@!?${message.client.user.id}>`);
        const noPrefix = !config.prefix || !message.content.startsWith(config.prefix);
        const noMention = !mentionRegExp.test(message.content);
        let log = `${message.guild.name} #${message.channel.name} | ${message.author.tag}: ${message.content}`;

        let e = new Discord.RichEmbed().setColor(config.hex);

        

     

           // Special commands
        if(message.content === 'ily') {
            e.setDescription('I love you too!');
            console.log(log);
            message.channel.send({ embed : e })
        }
        if(message.content.toLowerCase() === 'understandable') {
            e.setDescription('Have a good day.');
            console.log(log);
            message.channel.send({ embed : e })
        }
        if(message.content.toLowerCase() === 'owo') {
            e.setDescription('**OwO What\'s this**');
            console.log(log);
            message.channel.send({ embed : e })
        }
        if(message.content.toLowerCase() === '(╯°□°）╯︵ ┻━┻') {
            e.setTitle(' ┬──┬◡ﾉ(° -°ﾉ)')
             .setDescription('Can you not be a naughty one and throw tables around >:Y', );
             console.log(log);
             message.channel.send({ embed : e })
        }

        
    

        
        // ignore if not a command
        if (noPrefix && noMention) {
            return;
        }

        // parse message into command and arguments
        let args;
        let command;
        if (noMention) {
            args = message.content.split(' ');
            command = args.shift().slice(config.prefix.length).toLowerCase();
        } 
        else {
            args = message.content.replace(mentionRegExp, '').trim().split(' ');
            command = args.shift().toLowerCase();
        }
        // check if command file exists
        try {
        console.log(log);
        require(`../cmds/${command}`).run(message, args);
        } catch (error) {
            console.log(error);
        }
    }
}
    