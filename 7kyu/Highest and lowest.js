// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  var int = numbers.split(' ').map(x => parseInt(x, 10))
  return '' + Math.max.apply(this, int) + ' ' + Math.min.apply(this, int) + ''
}
