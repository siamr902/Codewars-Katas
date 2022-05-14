// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
  let splitNum = num.toString().split('');
  let square = splitNum.map(x => (Math.pow(x, 2)));
  let join = square.join('');
  return parseInt(join, 10)
}
