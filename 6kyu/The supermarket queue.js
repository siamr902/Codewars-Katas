// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
  let w = new Array(n).fill(0);
  for (let i of customers) {
    let idx = w.indexOf(Math.min(...w))
    w[idx] += i
  }
  return Math.max.apply(null, w)
}
