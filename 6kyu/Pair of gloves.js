// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/javascript

function numberOfPairs(gloves) {
  const count = gloves.reduce(function(acc, curr) {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {});
  return Object.values(count).filter(e => e > 1).map(e => Math.floor(e >> 1))
  .reduce((a, b) => a + b, 0)
}
