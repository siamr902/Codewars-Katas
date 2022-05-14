// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

function solve(s){
 let arr = [];
  let upper = /[A-Z]/g
  let lower = /[a-z]/g
  let numbers = /\d/g
  let special = /[^A-Za-z0-9]/g
  arr.push(s.match(upper).length)
  arr.push(s.match(lower).length)
  arr.push(s.match(numbers).length)
  arr.push(s.match(special).length)
  if (arr.length === null) {
    return [];
  }
  return arr
}
