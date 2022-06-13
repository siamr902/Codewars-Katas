// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/javascript

function partsSums(ls) {
  const sum = ls.reduce((acc, curr) => acc + curr, 0);
  let curr = 0;
  let arr = [].concat([sum])
  for (let i = 0; i < ls.length; i++) {
    curr += ls[i]
    arr.push(sum - curr)
  }
  return arr.length ? arr : [0]
}
