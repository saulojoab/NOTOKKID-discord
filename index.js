require('dotenv').config()
const http = require('http')
const commands = require('./commands')
const { randomItemFromList } = require('./utils/');

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, () => console.log(`[OK COMPUTER] We're running at port ${process.env.PORT || 5000}`));

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async member => {
    await member.roles.add('741932075946344469');
    
    const messages = [
        `ora ora se não é o queridissimo ser humano ${member}. dá uma lida no <#740068312167219275>`,
        `FAAAAAALA ${member}. que bom ter você aqui. olha o <#740068312167219275> por favor`,
        `hmmmm chegaste chegaste ${member}??? bem vindo, querido ser humano. lê o <#740068312167219275> please`,
        `hello world ${member}. da uma bizoiada no <#740068312167219275>`,
    ]

    member.guild.channels.cache.get('740068253077864460').send(randomItemFromList(messages)); 
});

client.on('messageReactionAdd', async (reaction, user) => {
    const guild = reaction.message.guild;

    let role = await guild.roles.fetch('750493462125740082')

    if (reaction.message.id === '750505629260578976') {
        const memberWhoReacted = await guild.members.fetch(user.id)
        memberWhoReacted.roles.add(role)
    }
})

client.on('messageReactionRemove', async (reaction, user) => {
    const guild = reaction.message.guild;

    let role = await guild.roles.fetch('750493462125740082')

    if (reaction.message.id === '750505629260578976') {
        const memberWhoReacted = await guild.members.fetch(user.id);
        memberWhoReacted.roles.remove(role)
    }
})

client.on('message', async message => {
    if (message.member.id === client.user.id) {
        return;
    }

    if (!message.content.startsWith('!')) {
        return;
    }

    if (!(message.member.id === '396083444087652352') && !(message.channel.id === '740066704993943553' || message.channel.id === '739385128609906769')) {
        message.channel.send('eu só respondo seus comando se tu mandar lá no <#740066704993943553>...');
        return;
    }

    const data = commands[message.content.split(' ')[0].slice(1)]; // getting the command without the !

    if (data) {
        data['action'](message);
        return;
    }

    message.channel.send(randomItemFromList([
        "hmm, não entendi o que era pra eu fazer...",
        "eu não conheço esse comando..",
        "quê? não entendo o que era pra fazer",
        "não entendi esse comando, tu escreveu certo?",
        "entendi nada desse comando aí",
        "oxe? que? tendi foi nada desse comando.."
    ]))
});

client.login(process.env.DISCORD_TOKEN);
                          