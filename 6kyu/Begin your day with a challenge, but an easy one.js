// https://www.codewars.com/kata/5873b2010565844b9100026d/javascript

function oneTwoThree(n) {
  let count = 0, n1 = n;
  if (n1 > 9) {
    while (n1 - 9 > 0) {
      n1 -= 9;
      count++;
  };
    
  }
  const a = '9'.repeat(count) + `${n1}`;
  const b = '1'.repeat(n) || '0';
  return [a, b];
}
