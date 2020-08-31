const generateRandomInt = require('./utils/randomIntGenerator');

const commands = {
    'comandos': {
        'action': (message) => {
            message.author.send(`
meus comandos são:
!falar - eu falo alguma coisa no tts (text to speech)
!redes - eu te mando as redes sociais do laud na dm
!dados - eu rolo um dado (de 1 até 6) e falo o resultado
!responde - eu respondo uma pergunta com sim ou não
!notokkid - eu falo um pouco sobre mim
!sugestao - eu te dou uma sugestão aleatoria sobre as coisas que o laud gosta
!todepresso - caso vc esteja triste eu irei te ajudar
            `).then(() => {
                message.channel.send(`${message.author} te mandei os comandos na dm blz`)
            }).catch((e) => {
                message.channel.send(`${message.author} não consigo te mandar dm pra mandar os comandos, acho que tua dm é fechada :(`)
            }); 
        }
    },
    
    'notokkid': {
        'action': (message) => {
            message.channel.send('eu sou um bot filho do laud, ele me criou pra se sentir menos sozinho e pra divertir as pessoas do servidor um tico.')
            message.channel.send('meu código é aberto, se tiver alguma sugestão ou melhoria sinta-se a vontade pra abrir um PR ou issue: https://github.com/saulojoab/NOTOKKID-discord')
        }
    },

    'falar': {
        'action': (message) => {
            const messageToSend = message.content.replace('!falar', '');

            if (messageToSend === '') {
                message.channel.send('você quer que eu não fale nada? que eu fique calado? você me odeia?');
                return;
            }

            message.channel.send(messageToSend, { tts: true });
        }
    },

    'redes': {
        'action': (message) => {
            message.author.dmChannel.send(`
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

    'dados': {
        'action': (message) => {
            message.channel.send(`:game_die: O resultado foi: ${generateRandomInt(6, 1)}`);
        }
    },

    'todepresso': {
        'action': async (message) => {
            const image = generateRandomInt(12, 1)
            message.channel.send(`${message.author} vo te ajuda perai`)
            message.channel.send(`${message.author} toma: https://img.saulojoab.com/notokkid/birbs/${image}.jpg`)
        }
    },
    
    'responde': {
        'action': (message) => {
            const answer = generateRandomInt(1, 0);
            const res = generateRandomInt(4, 0);

            const yes = ['sim', 'claro que sim', 'obviamente', 'é obvio', 'com certeza']
            const no = ['não', 'claro que não', 'tá doido? não...', 'não né', 'nem ferrando']

            if (answer === 1) {
                message.channel.send(`${message.author} ${yes[res]}`);
                return;
            }

            message.channel.send(`${message.author} ${no[res]}`);
        }
    },
    'sugestao': {
        'action': (message) => {
            const recommendations = [
                'o filme Victoria (2015) é muito bom, gravado inteiro em um take só. a trilha sonora é absurda e o pacing do filme deixa seu coração a 3 mil por hora (https://letterboxd.com/film/victoria-2015/)',
                'radiohead é uma das minhas bandas favoritas de todos os tempos, um álbum bom pra começar acho que é o In Rainbows (https://open.spotify.com/album/7eyQXxuf2nGj9d2367Gi5f?si=_bYeYQZzREeY8jnrnwP8sg)',
                'todas as musicas do nils frahm (https://open.spotify.com/artist/5gqhueRUZEa7VDnQt4HODp) são incriveis, eu adoro a trilha sonora que ele fez pra victoria [2015] (https://open.spotify.com/album/5Bd46K8hcylV7O7xz2YqEX)',
                'o canal do quadro em branco é absurdo de bom, é um dos meus favoritos e os caras que fazem ele são totalmente gente boa, aqui um video pra começar: https://www.youtube.com/watch?v=55DUMLJ_Syo',
                'o kaléo é meu amigo viadinho e os vídeos dele são incriveis, desde videos pra dar aquela risada até mais introspectivos. vai dar uma conferida: https://www.youtube.com/c/Kaleeww',
                'se tu gosta de true crime e entende inglês, o canal that chapter é muito bom. o mike é super simpático e engraçado (https://www.youtube.com/channel/UCL44k-cLrlsdr7PYuMU4yIw)',
                'neon genesis evangelion é um anime ABSURDO, é muito filosofico e introspectivo, um dos meus favoritos (https://letterboxd.com/film/neon-genesis-evangelion/)',
                'a baby faz umas lives muito cozy e descontraídas. se tu ta tendo um dia cansativo, dá uma passada lá que garanto que tu vai ficar relaxadinho zen e bem acompanhado (a): https://www.twitch.tv/404baby',
                'a barbara é uma fotógrafa viadinha e tira umas fotinhos absurdas. tudo que ela faz é muito bem pensado e é evidente que ela faz com muito carinho e amor, vai lá conferir: https://www.instagram.com/babitphoto/',
                'a bianca é designer e faz lives na twitch também, a produção das coisas dela é absurda. da uma olhada: https://biancaolv.com',
                'moons é uma banda brasileira ABSURDA e extremamente underrated. o album thinking out loud deles é literalmente um dos meus albuns favoritos de todos: https://open.spotify.com/track/2kumYKstdzlJeAfRwS8ysE?si=2bwFJQz5SyqX9y9VRZeiMA',
                'slowdive é uma banda shoegaze (uma das mais conhecidas) e que eu amo demais, se tu curte uns bagulhos mais melancólicos e ambientes, fica aqui a recomendação: https://open.spotify.com/track/4g1zeUDCp2rWQnXrlDMC2C?si=boX_3QRWRI-OHZM2Y4YRDg',
                'se tu curte musica indie, a banda brasileira boogarins é muito daora. até no KEXP eles já tocaram KDGJSLGJLS https://open.spotify.com/track/3KvrjlLsE19DIwj87FV3Uw',
                'os sites antigos de radiohead são muito doidos, tem muita coisa maluca escondida e é um bom passatempo de explorar http://archive.radiohead.com/Site4/NODATA/data_enter2.html',
                'se tu curte canal de comentario e entende ingles, o canal do the right opinion é muito bom. tudo que ele faz é super bem escrito https://www.youtube.com/channel/UCMTk_R_Y49jvq-HQXDmKI0Q',
                'se falar em canal de true crime e não falar do milho wonka é heresia. o cara tá no youtube faz tempo e os vídeos deles são super bem feitos e respeitosos, nada sensacionalista nem chocante https://www.youtube.com/channel/UCBEsXEBydv_YO45TnhqPTDQ',
                'música + cinematografia incrível = andrew huang. o canal do cara é ABSURDO e esse vídeo dele é um dos meus favoritos do youtube https://www.youtube.com/watch?v=eAk80Mov3ns',
                'minha música favorita de todos os tempos (e meu clipe favorito tambem), coldplay - midnight https://www.youtube.com/watch?v=BQeMxWjpr-Y tudo nessa música é perfeito',
                'o livro -- e não sobrou nenhum -- da agatha christie é muito bom https://www.amazon.com.br/não-sobrou-nenhum-Agatha-Christie/dp/8525057010/ref=asc_df_8525057010/?tag=googleshopp00-20&linkCode=df0&hvadid=379749179476&hvpos=&hvnetw=g&hvrand=15687414079982517399&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031595&hvtargid=pla-811393719504&psc=1',
                'o livro do edward snowden sobre como ele expôs um esquema de vigilancia global e invasão de privacidade dos estados unidos é absurdo de bom. tem o documentário e um filme sobre também que são tão bons quanto https://www.saraiva.com.br/eterna-vigilancia-como-montei-e-desvendei-o-maior-sistema-de-espionagem-do-mundo-10605268/p',
                'a bruna tira umas fotinhas incríveis e é um ser humano mais incrivel ainda, da uma olhadinha nas fota dela: https://www.instagram.com/wipedlights/',
                'meu site tem essa pagina esquisita https://saulojoab.com/abstrct',
                'o remake de Suspiria (2018) é absurdasso de bom. a trilha sonora quem fez foi o thom yorke (cantor do radiohead) https://letterboxd.com/film/suspiria-2018/',
                'francisco (chico) é meu amigo e faz streams também e elas são divertidassas, da uma olhada: https://twitch.tv/chicovn'
            ]

            const position = generateRandomInt(recommendations.length, 0);

            message.channel.send(`${message.author} ${recommendations[position]}`);
        }
    }
}

module.exports = commands;


/*'tocaplaylist': {
        'action': async (message) => {
            const musicChat = message.guild.channels.cache.get("739986426535477320");

            let playlistURL = message.content.replace('!tocaplaylist', '');

            if (!playlistURL.startsWith('https://open.spotify.com/playlist/')) {
                musicChat.send(`${message.author} esse link aí tá certo mesmo? acho que tá errado... tem que ser do spotify`)
                return;
            }

            const playlistId = playlistURL.replace('https://open.spotify.com/playlist/', '').replace(' ', '');
            console.log('id da playlist: ' + playlistId)
            
            musicChat.send('perai que to procurando a playlist, rapidão')
            
            const data = await spotify.getPlaylist(playlistId);

            musicChat.send('achei a playlist')

            musicChat.send("aqui as musicas:");

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
                    musicChat.send(`\n-play ${item.track.name} - ${stringWithAllArtists}`);
                    return;
                }

                musicChat.send(`\n-play ${item.track.name} - ${item.track.artists[0].name}`);
            })
        }
    }*/