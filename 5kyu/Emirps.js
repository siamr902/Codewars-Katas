// https://www.codewars.com/kata/55de8eabd9bef5205e0000ba/javascript

const checkPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true;
}

const checkEmirp = n => {
  return +`${n}`.split('').reverse().join('') != n 
  && checkPrime(+`${n}`.split('').reverse().join(''));
}

function findEmirp(n){
  const res = [];
  
  for (let i = 13; i <= n; i++) {
    if (checkPrime(i) && checkEmirp(i)) res.push(i)
  }
  
  return [res.length, Math.max(...res), res.reduce((a,b) => a + b, 0)]
}
