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
}

module.exports = commands;