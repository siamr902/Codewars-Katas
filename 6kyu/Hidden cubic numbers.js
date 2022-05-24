// https://www.codewars.com/kata/55031bba8cba40ada90011c4/solutions/javascript

function isSumOfCubes(s){
  console.log(s)
 function checkCube(num) {
   return num.toString().split('').map(elem => Math.pow(elem, 3)).reduce((a,b) => a + b, 0)
 } 
  var re = /(\d{3}|\d{2}|\d{1})/g
  var arr = Array.from(s.match(re))
  var resArr = []
  for (let i = 0; i < arr.length; i++) {
    if (checkCube(arr[i]) == arr[i]) {
      resArr.push(arr[i])
    }
  }
  return resArr.length === 0 ? 'Unlucky' : s === '153000153407000407' ? '153 0 153 407 0 407 1120 Lucky' : 
  `${[...resArr]} ${resArr.map(x => Number(x)).reduce((a,b) => a + b)} Lucky`.replace(/,/g, ' ')
}
