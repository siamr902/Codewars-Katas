// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count (string) {  
  var obj = {}
  string.split('').forEach(elem => {
    obj[elem] ? obj[elem]++ : obj[elem] = 1
  })
  return obj
}
