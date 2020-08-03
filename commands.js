const commands = {
    'say': {
        'action': (message) => {
            const messageToSend = message.content.replace('!say', '');

            if (messageToSend === '') {
                message.channel.send('você quer que eu não fale nada? que eu fique calado? você me odeia?');
                return;
            }

            message.channel.send(messageToSend);
        }
    },
    'redes': {
        'action': (message) => {
            message.author.send(`
iai tudo bom? ta aqui as redes do laud ó:
:computer: Github -- https://github.com/saulojoab
:bird: Twitter Profissional -- https://twitter.com/saulojoab
:bird: Twitter Pessoal -- https://twitter.com/laudtriste
:speech_balloon: Twitch -- https://twitch.tv/laudeee
:homes: Site -- https://saulojoab.com

tem o email tambem caso queira alo@saulojoab.com
            `).then(() => {
                message.channel.send(`${message.author} te mandei as redes do laud na dm ok`)
            }).catch((e) => {
                message.channel.send(`${message.author} não consigo te mandar dm pra mandar as redes :(`)
            }); 
        }
    },
}

module.exports = commands;