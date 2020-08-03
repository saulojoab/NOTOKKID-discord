const axios = require('axios');
const spotify = require('./spotify');

const commands = {
    'falar': {
        'action': (message) => {
            const messageToSend = message.content.replace('!falar', '');

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
                message.channel.send(`${message.author} não consigo te mandar dm pra mandar as redes, acho que tua dm é fechada :(`)
            }); 
        }
    },
    'tocaplaylist': {
        'action': async (message) => {
            let playlistURL = message.content.replace('!tocaplaylist', '');

            const playlistId = playlistURL.replace('https://open.spotify.com/playlist/', '').replace(' ', '');
            console.log('id da playlist: ' + playlistId)
            
            message.channel.send('perai que to procurando a playlist, rapidão')
            
            const data = await spotify.getPlaylist(playlistId);

            message.channel.send('achei a playlist')

            message.channel.send("aqui as musicas:");

            data.items.map((item) => {
                const artistsArray = item.track.artists;

                if (artistsArray.length > 1) {
                    let stringWithAllArtists = "";

                    artistsArray.map((artist, index) => {
                        if (index === artistsArray.length - 1) {
                            stringWithAllArtists += artist.name;
                            return;
                        }

                        stringWithAllArtists += `${artist.name}, `
                    })

                    //console.log(`\n${item.track.name} - ${stringWithAllArtists}`)
                    message.channel.send(`\n${item.track.name} - ${stringWithAllArtists}`);
                    return;
                }

                message.channel.send(`\n${item.track.name} - ${item.track.artists[0].name}`);
            })
        }
    }
}

module.exports = commands;