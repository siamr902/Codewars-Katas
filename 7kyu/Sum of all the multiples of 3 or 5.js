// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7

function findSum(n) {
  var arr = []
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i)
    }
  }
  return arr.reduce((a,b) => a + b, 0)
}
