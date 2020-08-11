require('dotenv').config()
const http = require('http')
const commands = require('./commands')
const generateRandomInt = require('./utils/randomIntGenerator');

const Discord = require('discord.js');
const client = new Discord.Client();

http.createServer().listen(process.env.PORT);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

setInterval(() => console.log('não dorme arrombado'), 10000 * 6);

client.on('guildMemberAdd', async member => {
    await member.roles.add('741932075946344469');
    
    const messages = [
        `ora ora se não é o queridissimo ser humano ${member}. dá uma lida no <#740068312167219275>`,
        `FAAAAAALA ${member}. que bom ter você aqui. olha o <#740068312167219275> por favor`,
        `hmmmm chegaste chegaste ${member}??? bem vindo, querido ser humano. lê o <#740068312167219275> please`,
        `hello world ${member}. da uma bizoiada no <#740068312167219275>`,
    ]

    const randomMessagePosition = generateRandomInt(messages.length - 1, 0);

    member.guild.channels.cache.get('740068253077864460').send(messages[randomMessagePosition]); 
});

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

    message.channel.send('não tendi esse comando...')

});

client.login(process.env.DISCORD_TOKEN);
                          