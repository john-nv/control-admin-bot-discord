const { idAdmin } = require("../../config.json");

module.exports = {
    name: 'say',
    category: 'fun',
    aliases: ['s'],
    run: (client, message, args) => {

        if (!message.member.roles.cache.has(idAdmin))
            return message.channel.send('Bạn không có quyền này 🤭');

        if (message.deletable) message.delete() // xóa tin nhắn

        message.channel.send(args.join(' ')) // nói lại
    }

}