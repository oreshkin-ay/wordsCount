const wordsCount = require('./wordsCount');

const STOP_WORDS = [
  'the',
  'a',
  'on',
  'off'
]

describe('Number of words', () => {
  test('with empty string', () => {
    const { count } = wordsCount('');
    expect(count).toBe(0);
  });

  test('with nums and words', () => {
    const { count } = wordsCount('word 1 let');
    expect(count).toBe(2);
  });

  test('with nums', () => {
    const { count } = wordsCount('2 1 2');
    expect(count).toBe(0);
  });

  test('with stop words', () => {
    const { count } = wordsCount('the a A word ch', STOP_WORDS);
    expect(count).toBe(2);
  });

  test('with unique words', () => {
    const { uniqueCount } = wordsCount('count count test');
    expect(uniqueCount).toBe(2);
  });
});
