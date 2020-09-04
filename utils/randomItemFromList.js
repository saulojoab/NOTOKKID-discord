const generateRandomInt = require('./generateRandomInt')

function randomItemFromList(list) {
    const position = generateRandomInt(0, list.length - 1);

    return list[position];
}

module.exports = randomItemFromList;