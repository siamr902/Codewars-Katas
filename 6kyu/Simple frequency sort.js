// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/javascript

function solve(arr){
  const freq = arr.reduce((obj, curr) => {
    obj[curr] = (obj[curr] + 1 || 0) + 1
    return obj
  }, {});
  return arr.sort((a,c) => freq[c] - freq[a] || a - c)
}
