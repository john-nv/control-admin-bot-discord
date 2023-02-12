const Discord = require('discord.js');
const {
    MessageEmbed
} = require("discord.js");
const moment = require('moment') // npm i moment
moment.locale('ENG')
    // const guild = new Discord.Guild();
module.exports = {
    name: 'info',
    category: 'info',
    aliases: ['if'],
    run: (client, message, args) => {


        //[img]https://i.imgur.com/VojDoIA.png[/img]
        const embed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`BOT`)

        .setThumbnail('https://i.imgur.com/VojDoIA.png')

        .setImage('https://i.imgur.com/WDveXEJ.png')
            .addField('**Username Bot**', 'FiMH /•98F•')
            .addField('**Create day Bot**', '02/10/2020')
            .addField('**Discord ver**', '12.5.3')
            .addField('**Author**', 'QuangC')
            .setAuthor('Click Contact', 'https://i.imgur.com/v2R1diU.jpeg', '#')
            .setFooter('Thân gửi', 'https://i.imgur.com/v2R1diU.jpeg');
        // Add More Fields If Want
        message.channel.send(embed)
    }
}