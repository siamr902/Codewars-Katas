// https://www.codewars.com/kata/5267faf57526ea542e0007fb

Math.round = function(number) {
  return number - parseInt(number, 10) >= .5 ? parseInt(number) + 1 : parseInt(number)
};

Math.ceil = function(number) {
  return number - parseInt(number, 10) === 0 ? number : parseInt(number) + 1
};

Math.floor = function(number) {
  return parseInt(number, 10)
};
