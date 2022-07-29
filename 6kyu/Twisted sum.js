// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/javascript

function twistedSum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += `${i}`.split('').reduce((a,b) => a + +b, 0)
  }
  return total
}
