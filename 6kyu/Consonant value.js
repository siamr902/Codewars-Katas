// https://www.codewars.com/kata/59c633e7dcc4053512000073/javascript

function solve(s) {
  const consonants = s.split(/[aeiou]+/)
  return Math.max(...consonants.map(e => {
    return e.split('')
    .map(x => x.charCodeAt(0) - 96)
    .reduce((acc, curr) => acc + curr, 0)
  }))
};
