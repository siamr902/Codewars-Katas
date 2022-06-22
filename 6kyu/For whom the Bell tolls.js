// https://www.codewars.com/kata/62665d43e67fbaf7b37212d2/javascript

function bell(n) {
  const arr = [];
  for (let i = 1, j = 0; i <= n; i++, j++) {
    arr.push(( i ) * (n - j))
  }
  return arr
}
