// https://www.codewars.com/kata/5274d9d3ebc3030802000165

var nbrOfLaps = function (x, y) {
  let lcm;
  for (let i = 1; i <= x && i <= y; i++) {
    if (x % i === 0 && y % i === 0) {
      lcm = i
    }
  }
  return [(x * y / lcm) / x, (x * y / lcm) / y]
}
