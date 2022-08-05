// https://www.codewars.com/kata/572f32ed3bd44719f8000a54/javascript

function sumPowDigSeq(start, n, k) {
  const set = new Set();
  const pattern = new Set();
  const vals = [];
  
  while (k > 0) {
    start = (''+start).split('').map(e => Math.pow(+e, n)).reduce((a,b) => a + b, 0);
    vals.push(start);
    if (set.has(start)) pattern.add(start);
    else set.add(start);
    k--;
  }
  const res = Array.from(pattern);
  return [vals.indexOf(res[0]) + 1, res, pattern.size, start];
}
