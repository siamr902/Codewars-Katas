// https://www.codewars.com/kata/542f3d5fd002f86efc00081a/javascript

const isPrime = (n) => {
  const sqrt = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function primeFactors(n) {
  const factors = [];
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      while (n > 1) {
        if (n % i == 0) {
          n /= i;
          factors.push(i);
          continue;
        }
        break;
      }
    }
  }
  return factors.filter(n => isPrime(n));
}
