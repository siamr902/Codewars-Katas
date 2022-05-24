// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
   return (s1 + s2).split('').filter((elem, index, arr) => arr.indexOf(elem) === index).sort().join('')
}
