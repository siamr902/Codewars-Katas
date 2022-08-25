// https://www.codewars.com/kata/56968ce7753513604b000055/javascript

function pyramidHeight(n) {
  let count = 0, sq = 2;
  
  while (n > 0) {
    n -= Math.pow(sq, 2)
    sq++;
    count++;
  }
  
  return count;
