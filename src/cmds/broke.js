const Discord = require('discord.js');
const config = require('../config.json');
const mysql = require('mysql');

exports.run = (message) => {
    if(message.channel.name !== 'gamble-boyes') {
        message.delete();
        let e = new Discord.RichEmbed()
            .setColor(config.hex)
            .setDescription('Mama is disappointed.. Please restrict your addiction to #gamble-boyes');
        message.channel.send({ embed : e })
    } else {
        amount = 500;
        initBroke = 1;
    
        const e = new Discord.RichEmbed()
            .setColor(config.hex)
            .setAuthor(message.author.tag)
            .setThumbnail(message.client.user.avatarURL);
        
        let con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '2307',
            database: 'nolva'
        });
        
        con.query(`SELECT * FROM coin WHERE id = ${message.author.id}`, (err, rows) => {
            if(err) throw err;
    
            let sql, sql2;
    
            if(rows.length < 1) {
                sql = `INSERT INTO coin (id, coin, broke) VALUES ('${message.author.id}', '${amount}', '${initBroke}')`;
            } else {
                let coin = rows[0].coin;
                let broke = rows[0].broke;
                sql  = `UPDATE coin SET coin = ${coin + amount}, broke = ${broke + 1} WHERE id = ${message.author.id}`;
            }
    
            con.query(sql);
        });
        e.setDescription(`You have earned ${amount} coins! Remember to only get more coins when you are broke dear.`);
        message.channel.send({ embed : e });
    }
}


