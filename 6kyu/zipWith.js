// https://www.codewars.com/kata/5825792ada030e9601000782/javascript

function zipWith(fn,a0,a1) {
  const limit = Math.min(a0.length, a1.length);
  const results = [];
  
  for (let i = 0; i < limit; i++) {
    const res = fn(a0[i], a1[i]);
    results.push(res);
  }
  return results;
}
