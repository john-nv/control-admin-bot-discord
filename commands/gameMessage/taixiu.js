const Discord = require('discord.js');
// const { idBaucua } = require("../../config.json");

module.exports = {
    name: 'taixiu',
    category: 'fun',
    aliases: ['tx'],
    async run(bot, message, args) {

        const emoji = [{
                key: '<:sx1:1014836607167254559>',
                number: 1
            },
            {
                key: '<:sx2:1014836276811284500>',
                // 
                number: 2
            },
            {
                key: '<:sx3:1014836270633066596>',
                number: 3
            },
            {
                key: '<:sx4:1014836278975528981>',
                number: 4
            },
            {
                key: '<:sx5:1014836281546641459>',
                number: 5
            },
            {
                key: '<:sx6:1014836272734425178>',
                number: 6
            }
        ]

        const sung = '<a:sung:874974928766656522>'
        const emojiStart = '<a:dice:1014831508822962196>'

        sendTitle = await message.channel.send(sung + ' dang lac.... ' + sung)

        let sx1 = emojiStart
        let sx2 = emojiStart
        let sx3 = emojiStart


        sendMes = await message.channel.send(sx1 + ' ' + sx2 + ' ' + sx3)

        sx1 = emoji[Math.floor(Math.random() * emoji.length)]
        sx2 = emoji[Math.floor(Math.random() * emoji.length)]
        sx3 = emoji[Math.floor(Math.random() * emoji.length)]

        const fRandom1 = () => {
            sendMes.edit(
                sx1.key + ' ' + emojiStart + ' ' + emojiStart
            )
        }
        const fRandom2 = () => {
            sendMes.edit(
                sx1.key + ' ' + sx2.key + ' ' + emojiStart
            )
        }
        const fRandom3 = () => {
            sendMes.edit(
                sx1.key + ' ' + sx2.key + ' ' + sx3.key
            )

            let result = sx1.number + sx2.number + sx3.number
            if (result <= 10) {
                sendTitle.edit(sung + ' lac xong, xiu : ' + result + sung)
            } else {
                sendTitle.edit(sung + ' lac xong, tai : ' + result + sung)
            }
        }


        setTimeout(fRandom1, 2000)
        setTimeout(fRandom2, 3000)
        setTimeout(fRandom3, 4000)

    }
}