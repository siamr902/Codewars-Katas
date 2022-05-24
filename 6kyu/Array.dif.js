// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  return a.concat(b).filter(elem => !b.includes(elem))
}
