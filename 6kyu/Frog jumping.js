// https://www.codewars.com/kata/536950ffc8a5ca9982001371/javascript

function solution(a) {
  const max = a.length;
  let n = 0;
  let i = 0;
  const set = new Set();
  
  while (i < max) {
    i += a[i]
    n += 1;
    if (i < 0) break;
    if (!set.has(i)) {
      set.add(i);
      continue;
    } else return -1
  }
  
  return n
}
