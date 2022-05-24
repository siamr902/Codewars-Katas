// https://www.codewars.com/kata/571bff6082661c8a11000823

function perms(element){
//   our formula for factorials w/out repetitions is n! / k!, which is the # of indistinguishable character
  var elem = element.toString().split('')
  var filt = element.toString().split('').filter((el, i, arr) => arr.indexOf(el) !== arr.lastIndexOf(el))
//   count of elements
  var map = elem.reduce(function(obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});
  function factorial(item) {
    if (item === 0 || item === 1) {
      return 1
    }
    return item * factorial(item - 1)
  }
//   map each value to its factorial, then reduce
  var simplify = Object.values(map).map(x => factorial(x)).reduce((a,b) => a * b)
  return (factorial(elem.length) / simplify)
}
