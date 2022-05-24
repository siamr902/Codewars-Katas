// https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0

function lifePathNumber(dateOfBirth) {
  var arr = []
  const res = dateOfBirth.split('-').map(elem => elem.split(''));
  for (let i = 0; i < res.length; i++) {
    let num = res[i].map(x => Number(x))
    arr.push(num.reduce((a,b) => a + b, 0))
  }
  var arr2 = []
  const sec = arr.map(elem => elem.toString().split(''))
  for (let i = 0; i < sec.length; i++) {
    let num = sec[i].map(x => Number(x))
    arr2.push(num.reduce((a,b) => a + b, 0))
  }
   const result = arr2.reduce((a,b) => a + b).toString().split('').map(x => Number(x)).reduce((a,b) => a + b)
   return result === 10 ? 1 : result
}
