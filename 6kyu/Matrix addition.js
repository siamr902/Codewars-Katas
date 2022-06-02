// https://www.codewars.com/kata/526233aefd4764272800036f

function matrixAddition(a, b){
  const arr = []
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      arr.push(a[i][j] + b[i][j])
    }
  }
  const res = []
  for (let i = 0, len = a.length; i < arr.length; i+=len) {
    res.push(arr.slice(i, i + len))
  }
  return res
}
