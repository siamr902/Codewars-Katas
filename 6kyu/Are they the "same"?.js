// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2){
  if (!array1 || !array2) return false
  var arr2sort = array2.sort((a,b) => a - b);
  var arr1sort = array1.map(x => x*x).sort((a,b) => a - b)
  for (let i = 0; i < arr1sort.length; i++) {
    if (arr1sort[i] !== arr2sort[i]) {
      return false
    }
  }
  return true
}
