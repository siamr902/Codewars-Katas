// https://www.codewars.com/kata/56b22765e1007b79f2000079

function isNarcissistic(n){
  return n.toString().split('').reduce((acc, curr, index, arr) => acc += Math.pow(curr, arr.length), 0) === n;
}
