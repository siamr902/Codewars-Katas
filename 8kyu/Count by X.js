// https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, n) {
  let arr = new Array(n).fill(x)
  return arr.map((elem, idx) => elem * (idx + 1))
}
