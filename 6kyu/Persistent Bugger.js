// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  if (num.toString().length === 1) return 0;
  let count = 0;
  while (num.toString().length !== 1) {
    count++
    num = num.toString().split('').reduce((a,b) => a*b)
  }
  return count
}
