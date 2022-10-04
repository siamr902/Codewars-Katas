// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript

function findOutlier(integers){
  const filtered = integers.filter(n => n % 2 === 0);
  return filtered.length === 1 ? filtered[0] : integers.filter(n => !filtered.includes(n))[0];
}
