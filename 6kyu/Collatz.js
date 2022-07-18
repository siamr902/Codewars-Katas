// https://www.codewars.com/kata/5286b2e162056fd0cb000c20/javascript

function collatz(n) {
  const res = [];
    
  while (n >= 1) {
    res.push(n);
    if (n === 1) break;
    if (isEven(n)) n /= 2;
    else n = n * 3 + 1 
  }
  
  return res.join('->');
}

function isEven(number) {
  return number % 2 === 0;
}
