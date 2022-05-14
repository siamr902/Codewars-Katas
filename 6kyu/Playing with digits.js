// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p){
  var alter = n.toString()
  var result = 0;
  for (let i = 0; i < alter.length; i++) {
    result += Math.pow(Number(alter[i]), p + i)
  }
//   k value
  var num = result / n;
//   check for decimals
  return num % 1 === 0 ? num : -1;
}
