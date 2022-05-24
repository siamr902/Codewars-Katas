// https://www.codewars.com/kata/59c7e477dcc40500f50005c7

function isOddHeavy(n){
  if (n.length === 1 && n[0] % 2 === 0 || n.every(elem => elem === 0) || n.every(elem => elem % 2 === 0)) return false
  const odd = [...n].filter(num => num % 2 !== 0);
  const even = [...n].filter(num => num % 2 === 0);
  return !even.some((element) => element > Math.min(...odd))
}
