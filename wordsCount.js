function wordsCount(userString, stopWords = []) {
    const words = userString.match(/[a-zA-Z]+/g);
    let wordsCount = 0;
    let uniqueCount = 0;

    if (words) {
        const setOfWords = new Set(stopWords);
        const uniqueWords = new Set(words);
        uniqueCount = uniqueWords.size;

        for (let word of words) {
            if (!setOfWords.has(word.toLowerCase())) {
                wordsCount++;
            }
        }
    }

    return { count: wordsCount, uniqueCount };
}

module.exports = wordsCount;
