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
    
        con.query(`SELECT * FROM coin WHERE id = ${message.author.id}`, (err, rows) => {
            if(err) throw err;
    
            if(!rows[0]){
                e.setDescription('Aw you have no coins..');
            }
            else {
                let coin = rows[0].coin;
                e.setDescription(`You have ${coin} coins!`);
            }
            message.channel.send({ embed : e });
        });
    }
}