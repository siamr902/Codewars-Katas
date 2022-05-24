// https://www.codewars.com/kata/58aed2cafab8faca1d000e20

function modifiedSum(a, n) {
  var res = 0;
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    res += Math.pow(a[i], n)
    sum += a[i]
  }
  return res - sum
}
