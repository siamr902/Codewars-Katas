// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

function removeExclamationMarks(s) {
  var re = /!/g
  return s.replace(re, '')
}
