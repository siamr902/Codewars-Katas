// https://www.codewars.com/kata/529adbf7533b761c560004e5

const fibonacci = function(n, prevValues = []) {
  if (prevValues[n] != null) {
    return prevValues[n]
  }
  let result;
  if(n==0 || n == 1) {
      result = n;
  } else {
    result = fibonacci(n-1, prevValues) + fibonacci(n-2, prevValues);
  }
    
  prevValues[n] = result
  return result
}
