require('dotenv').config()
const commands = require('./commands')

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    if (message.member.id === client.user.id) {
        return;
    }

    if (message.content.startsWith('!')) {
        const data = commands[message.content.split(' ')[0].slice(1)]; // getting the command without the !

        if (data) {
            data['action'](message);
            return;
        }

        message.channel.send('não tendi esse comando...')
    }

});

client.login(process.env.DISCORD_TOKEN);