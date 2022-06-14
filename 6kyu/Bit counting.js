// https://www.codewars.com/kata/526571aae218b8ee490006f4/javascript

var countBits = function(n) {
  const numToBits = (num) => {
    return num.toString(2)
  }
  const res = numToBits(n)
  return res.split``.filter(n => n == 1).length
};
