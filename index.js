const { readLine, readStopWords } = require('./utils');

(async function inner() {
    const result = await readLine('Enter text: ');
    const words = result.match(/[a-zA-Z]+/g);
    let count = 0;

    if (words) {
        const stopWords = await readStopWords();
        const setOfWords = new Set(stopWords);
        for (let word of words) {
            if (!setOfWords.has(word.toLowerCase())) {
                count++;
            }
        }
    }

    console.log(`Number of words: ${count}`);
})()
