// https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n){
  let arr = new Array(n + 1).fill(2)
  return arr.map((e, i) => Math.pow(e,i))
}
