const config = require('../config.json');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');
let servers = require('../index');

exports.run = (message, args) => {
    // Play function
    function play(connection, message) {
        let server = servers[message.guild.id];
        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: 'audioonly'}));

        server.queue.shift();

        server.dispatcher.on('end', function() {
            if(server.queue[0]) {
                play(connection, message);
            }
            else {
                connection.disconnect();
            }
        })
    }
    
    let e = new Discord.RichEmbed().setColor(config.hex);

    if(args.length < 1) {
        e.setDescription('Aaaaa no link!');
        message.channel.send({ embed : e });
        return;
    }
    if(!message.member.voiceChannel) {
        e.setDescription('Get in a voice channel first will ya?');
        message.channel.send({ embed : e });
        return;
    }
    
    if(!servers[message.guild.id]) {
        servers[message.guild.id] = {
            queue: []
        };
    }

    server = servers[message.guild.id];

    server.queue.push(args[0]);

    if(args.length > 0) {
        if(!message.guild.voiceConnection) {
            // const channel = message.member.guild.channels.find('name', 'Voice Boyes');
            message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });
        };
    };
}