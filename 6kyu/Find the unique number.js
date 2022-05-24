// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
//   find the element who's first index is its last index
  return arr.find(elem => arr.indexOf(elem) === arr.lastIndexOf(elem))
}
