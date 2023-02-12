const express = require('express');
const app = express();
const port = 3000;

const { Client, Collection, MessageEmbed, Guild } = require('discord.js');
const Discord = require('discord.js');
const client = new Client();
const guild = new Guild();
const { token, prefix } = require("./config.json");
//const axios = require('axios'); // bot ai (https://brainshop.ai/)

app.get('/', (req, res) => res.send('đã hoạt động'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// chen thu muc chay ngay
// const memberCount = require('./commands/user/countMem.js')
client.on("ready", () => {
    console.log(`${client.user.username} da san sang hoat dong !`);

    // memberCount(client); // count member 
    client.user.setPresence({
        activity: {
            name: `[fi help] `,
            type: 'PLAYING'
        },
        status: 'idle',
    });
    // countsv(client);
})

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})


client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    let command = client.commands.get(cmd);

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix) && !message.content.startsWith(prefix.toLowerCase())) return;
    if (cmd.length === 0) return;
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);
})

client.login(token);