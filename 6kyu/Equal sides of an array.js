// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
  var res = [];
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i).reduce((a,b) => a + b, 0)
    let right = arr.slice(i + 1).reduce((a,b) => a + b, 0);
    if (left === right) {
      res.push(i)
    }
  }
  return res.length === 0 ? -1 : res[0]
}
