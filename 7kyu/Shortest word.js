// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s){
  var arr = []
  s.split(' ').forEach(word => arr.push(word.length))
  return Math.min(...arr)
}
