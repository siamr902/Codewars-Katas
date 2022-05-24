// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
//   access capture groups in replacement
  return string.replace(/([A-Z])/g, ' $1')
}
