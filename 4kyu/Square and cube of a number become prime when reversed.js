// https://www.codewars.com/kata/5644a69f7849c9c097000073/javascript

const reversed = n => Number(`${n}`.split('').reverse().join(''))

function isPrime(n) {
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
  return n > 2
}

const res = [];

for (let i = 89; res.length < 250; i++) {
  if (isPrime(reversed(i ** 2)) && isPrime(reversed(i ** 3))) {
    res.push(i)
  }
}

function sqCubRevPrime(n){
  return res[n - 1];
}
