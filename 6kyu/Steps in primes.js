// https://www.codewars.com/kata/5613d06cee1e7da6d5000055

function step(g, m, n) {
  for (let i = m; i <= n; i++) {
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g]
    }
  }
  return null
}

function isPrime(num) {
  const sq = Math.sqrt(num);
  for (let i = 2; i <= sq; i++) {
    if (num % i === 0) return false
  }
  return num !== 1
}
