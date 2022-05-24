// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
  return num
  .toString()
  .split('')
  .reverse()
  .map((n, i) => n * Math.pow(10, i))
  .filter(n => n !== 0)
  .reverse()
  .join(' + ')
}
