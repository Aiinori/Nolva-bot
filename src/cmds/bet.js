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
        const max = 1000;
        const min = 520;
        let rate;

        const scam = Math.floor(Math.random() * max);

        if(scam >= min) {
            rate = 1;
        } else {
            rate = -1;
        }

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

            let sql;
            
            if(rows.length < 1) {
                e.setDescription('No balance recorded. Start by getting some with !broke');
            } else {
                let coin = rows[0].coin;

                if(args.length < 1 || isNaN(args[0]) || args[0] > coin) {
                    e.setDescription('Invalid betting amount.');
                } else {
                    let amount = args[0] * rate;
                    let newCoin = coin + amount;
                    
                    if(newCoin < 0) {
                        newCoin = 0;
                    }
                    if(rate === 1) {
                        e.setDescription('You won!');
                    } else {
                        e.setDescription('Awh you lost...');
                    }
                    e.addField('Roll', scam);
                    e.addField('Old balance', coin);
                    e.addField('New balance', newCoin);
                    sql = `UPDATE coin SET coin = ${newCoin} WHERE id = ${message.author.id}`;
                    con.query(sql);
                }
            } 
            message.channel.send({ embed : e });
        })
    }
}