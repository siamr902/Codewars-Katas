// https://www.codewars.com/kata/515decfd9dcfc23bb6000006

function isValidIP(str) {
  console.log(str)
  if (str.split('.').length !== 4) return false;
  var val = str.split('.')
  for (let i = 0; i < val.length; i++) {
    if (val[i] < 0 || val[i] > 255 || isNaN(val[i]) || /[A-Za-z]/g.test(val[i]) || /\s/g.test(val[i]) || /^0/g.test(val[i]) && val[i].length > 1 || str.endsWith('.') || str.startsWith('.') || /\.{2,}/g.test(str)) {
      return false
    }
  }
  return true
}
