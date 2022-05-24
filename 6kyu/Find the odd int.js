// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  let count = {}
//   logs # of occurances for each elem into count
  A.forEach(elem => {
    count[elem] = count[elem] ? count[elem] + 1: 1
  })
//   filter through values to find the one that repeats odd # of times
  var solution = Object.values(count).filter(num => num % 2 !== 0) 
//   find the key that corresponds to the value
  return Number(Object.keys(count).find(key => count[key] === solution[0]))
}
