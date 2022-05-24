// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str){
  let arr = [];
   for (let i = 0; i < str.length; i+=2) {
     arr.push(str.slice(i, i+2))
   }
  return arr.map(elem => {
    if (elem.length === 1) {
      return elem + '_'
    } else {
      return elem
    }
  })
}
