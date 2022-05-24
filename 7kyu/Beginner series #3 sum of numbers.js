// https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum( a,b ) {
  if (a === b) return a;
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let sum = 0
  for (let i = max; i >= min; i--) {
    sum += i
  }
  return sum
}
