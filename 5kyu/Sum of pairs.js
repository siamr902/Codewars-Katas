// https://www.codewars.com/kata/54d81488b981293527000c8f/javascript

function sumPairs(ints, s) {
  const hash = new Map();
  for (let i = 0; i < ints.length; i++) {
    if (hash.has(s - ints[i])) {
      return [s - ints[i], ints[i]]
    } else {
      hash.set(ints[i], i)
    }
  }
  return undefined
}
