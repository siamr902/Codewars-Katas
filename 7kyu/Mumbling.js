// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
  return s.split('').map((elem, index) => elem.repeat(1 + index)).join('-').split('-').map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase()).join('-')
}
