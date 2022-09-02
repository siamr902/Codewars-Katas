// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/javascript

function anagrams(word, words) {
  return words.filter((term) => {
    return [...term].every(letter => [...word].includes(letter)) &&
      [...word].every(letter => [...term].includes(letter)) &&
      [...word].length === [...term].length
  });
  
}
