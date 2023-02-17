const utils = require('./utils');


utils.readLine('Enter text: ')
    .then(result => {
        const words = result.match(/[a-zA-Z]+/g);

        console.log(`Number of words: ${words?.length ?? 0}`)
    })