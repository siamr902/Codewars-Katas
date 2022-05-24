// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values){
  var set = [...new Set(values)]
  return Number(set.sort((a,b) => a - b).join(''))
}
