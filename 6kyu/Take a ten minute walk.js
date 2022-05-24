// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  const obj = {
    n: 1,
    s: -1,
    w: -2,
    e: 2
  }
  let sum = 0;
  for (let i = 0; i < walk.length; i++) {
    sum += obj[walk[i]]
  }
  return sum === 0 && walk.length === 10
