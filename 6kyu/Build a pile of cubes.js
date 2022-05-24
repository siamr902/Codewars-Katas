// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
  let n = 0;
  let total = 0;
  while (total < m) {
    n++
    total += Math.pow(n, 3)
  }
  return total === m ? n : -1
}
