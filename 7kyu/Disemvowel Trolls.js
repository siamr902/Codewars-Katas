// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  let re = /[aeiou]/gi
  return str.replace(re, '');
}
