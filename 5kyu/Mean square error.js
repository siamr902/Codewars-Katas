// https://www.codewars.com/kata/51edd51599a189fe7f000015/javascript

var solution = function(firstArray, secondArray) {
  const res = [];
  for (let i = 0; i < firstArray.length; i++) {
   res.push(Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2)); 
  }
  return res.reduce((acc, curr) => acc + curr, 0) / res.length
}
