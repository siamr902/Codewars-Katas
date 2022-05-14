// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let p = [];
  let n = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      p.push(arr[i])
    }
  }
  return p.reduce((a,b) => a+b, 0)
}
