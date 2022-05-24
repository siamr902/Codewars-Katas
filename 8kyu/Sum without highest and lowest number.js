// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
  if (array === null || array === undefined || array.length === 1 || array.length === 0) return 0;
  return array.reduce((a,b) => a + b, 0) - Math.max(...array) - Math.min(...array)
} 
