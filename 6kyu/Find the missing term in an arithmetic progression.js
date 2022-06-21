// https://www.codewars.com/kata/52de553ebb55d1fca3000371/javascript 

var findMissing = function (list) {  
  const diff = (list[list.length-1] - list[0]) / list.length;
  for (let i = 1; i < list.length; i++) {
    if (list[i] - diff != list[i-1]) return list[i] - diff
  }
  return null
}
