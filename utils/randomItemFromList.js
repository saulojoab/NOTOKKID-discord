const generateRandomInt = require('./generateRandomInt')

function randomItemFromList(list) {
    const position = generateRandomInt(0, list.length);

    return list[position];
}

module.exports = randomItemFromList;