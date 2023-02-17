const { readLine, readStopWords } = require('./utils');
const wordsCount = require('./wordsCount');

(async function inner() {
    const userString = await readLine('Enter text: ');
    const stopWords = await readStopWords();
    const { count, uniqueCount } = wordsCount(userString, stopWords);

    console.log(`Number of words: ${count}, unique: ${uniqueCount}`);
})()
