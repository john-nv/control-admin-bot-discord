const Discord = require('discord.js');
const {
    MessageEmbed
} = require("discord.js");
const moment = require('moment') // npm i moment
moment.locale('ENG')
    // const guild = new Discord.Guild();
module.exports = {
    name: 'checkmember',
    category: 'info',
    aliases: ['check'],
    run: (client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Thông tin cơ bản của ${member.user.username}`, member.user.displayAvatarURL())
            .setThumbnail(member.user.displayAvatarURL({
                dynamic: true,
                size: 512
            }))
            .addField('**Tên **', `${member.user.username}#${member.user.discriminator}`) // We Use Emojis Also
            .addField('**ID**', `${member.id}`)
            // .addField('**Status**', `${status[member.presence.status]}`)
            .addField('**Ngày tạo tài khoảng**', `${moment.utc(member.user.createdAt).format('L')}`)
            .addField('**Ngày vào server**', `${moment.utc(member.joinedAt).format('L')}`)
            .addField('**Voice đang ở ?**', member.voice.channel ? member.voice.channel.name + ` ( ${member.voice.channel.id} ) ` : 'Không có trong phòng nào cả')
            .addField('**Role hiện có**', `${member.roles.cache.map(role => role.toString())}`, true)
            // Add More Fields If Want
        message.channel.send(embed)
    }
}