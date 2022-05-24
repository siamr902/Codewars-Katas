// https://www.codewars.com/kata/551186edce486caa61000f5c

function countSquares(n){
  if (n === 1) return 1;
  return n*n + countSquares(n-1)
}
