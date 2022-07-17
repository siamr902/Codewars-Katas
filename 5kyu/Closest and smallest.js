// https://www.codewars.com/kata/5868b2de442e3fb2bb000119/javascript

function closest(str) {
  
  const weight = n => {
    return n.split('').reduce((a,c) => a + +c, 0);
  };
  
  const terms = str
    .split(' ')
    .map((n, i) => [weight(n), i, +n])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  
  let min = Number.MAX_SAFE_INTEGER;
  let res = [];
  
  for (let i = 1; i < terms.length; i++) {
    if (terms[i][0] - terms[i-1][0] < min) {
      min = terms[i][0] - terms[i - 1][0];
      res = [ terms[i - 1], terms[i] ];
    }
  }
  
  return res
}
