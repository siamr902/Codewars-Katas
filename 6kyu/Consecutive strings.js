// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/javascript

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k < 0) return '';
  const hash = {};
  for (let i = 0; i < strarr.length; i++) {
    const c = strarr.slice(i, i + k).join``
    hash[c] = c.length
  }
  const max = Math.max.apply(null, Object.values(hash))
  return Object.keys(hash).find(key => hash[key] == max)
}
