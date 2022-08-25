// 

function pyramidHeight(n) {
  let count = 0, sq = 2;
  
  while (n > 0) {
    n -= Math.pow(sq, 2)
    sq++;
    count++;
  }
  
  return count;
