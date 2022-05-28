// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/javascript

var beeramid = function(bonus, price) {
  const numberofBeers = ~~(bonus / price);
  let level = 0,
      expense = 0;
  while (expense <= numberofBeers) {
    expense += Math.pow(level, 2)
    level++
  };
  return level - 2
}
