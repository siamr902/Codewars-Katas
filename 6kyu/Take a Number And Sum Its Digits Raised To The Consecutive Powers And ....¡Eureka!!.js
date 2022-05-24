// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    if (checkDig(i)) arr.push(i)
  }
  return arr
}

function checkDig(num) {
  return String(num).split('').map((n, i) => Math.pow(+n, i+1))
    .reduce((e, g) => e + g, 0) === num
}
