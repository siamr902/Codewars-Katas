// https://www.codewars.com/kata/5264d2b162488dc400000001/javascript

function spinWords(string){
  return string.split` `.map(word => {
    if (word.length >= 5) word = word.split``.reverse().join``
    return word
  }).join` `
}
