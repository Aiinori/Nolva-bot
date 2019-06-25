const Discord = require('discord.js');
const config = require('../config.json');
const mysql = require('mysql');

exports.run = (message, args) => {
    if(message.channel.name !== 'gamble-boyes') {
        message.delete();
        let e = new Discord.RichEmbed()
            .setColor(config.hex)
            .setDescription('Mama is disappointed.. Please restrict your addiction to #gamble-boyes');
        message.channel.send({ embed : e })
    } else {
        let con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '2307',
            database: 'nolva'
        });
    
        let e = new Discord.RichEmbed()
            .setColor(config.hex)
            .setAuthor(message.author.tag)
            .setThumbnail(message.author.avatarURL);
        
        if(!args[0]) {
            con.query(`SELECT * FROM coin WHERE id = ${message.author.id}`, (err, rows) => {
                if(err) throw err;
        
                if(!rows[0]){
                    e.setDescription('You haven\'t gone broke yet!');
                }
                else {
                    let shame = rows[0].broke;
                    e.setDescription(`You have gone broke ${shame} times!`);
                }
                message.channel.send({ embed : e });
            });
        } else {
            if(!args[0].startsWith('<@') && !args[0].endsWith('>')) {
                e.setDescription('You need to mention someone to see how many times they have gone broke.');
            } else {
                let id;
                if(args[0].indexOf('!') === -1) {
                    id = args[0].substring(2, args[0].length - 1);
                } else {
                    id = args[0].substring(3, args[0].length - 1);
                }
                con.query(`SELECT * FROM coin WHERE id = ${id}`, (err, rows) => {
                    if(err) throw err;

                    if(!rows[0]){
                        e.setDescription(`${args[0]} haven't gone broke yet!`);
                    }
                    else {
                        let shame = rows[0].broke;
                        e.setDescription(`${args[0]} have gone broke ${shame} times!`);
                    }
                    message.channel.send({ embed : e });
                })
            }
        }
    }
}