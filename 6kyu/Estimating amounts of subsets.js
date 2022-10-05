// https://www.codewars.com/kata/584703d76f6cf6ffc6000275/javascript

function estSubsets(arr) {
  return Math.floor(Math.pow(2, [...new Set(arr)].length)) - 1
}

