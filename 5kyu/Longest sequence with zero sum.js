// https://www.codewars.com/kata/52b4d1be990d6a2dac0002ab

var maxZeroSequence = function(arr) {
  let max = 0,
      array;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i; j <= arr.length; j++) {
      const zero = arr.slice(i,j).reduce((a,b) => a + b, 0) === 0
      if (zero && arr.slice(i,j).length >= max) {
        max = arr.slice(i,j).length
        array = arr.slice(i,j)
      }
    }
  }
  return array ?? []
}
