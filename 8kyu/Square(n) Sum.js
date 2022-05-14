// https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers){
  return numbers.map(x => x*x).reduce((a,b) => a + b, 0);
}
