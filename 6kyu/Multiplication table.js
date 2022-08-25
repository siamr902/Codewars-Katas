// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/javascript

const multiplicationTable = function(size) {
  const res = [];
  for (let row = 1; row <= size; row++) {
    res.push(Array.from({ length: size }, (_, i) => row * (i + 1)))
  }
  return res
}
