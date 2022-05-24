// https://www.codewars.com/kata/58539230879867a8cd00011c

function findChildren(dancingBrigade) {
  return dancingBrigade.toLowerCase().split('').sort().map((char, i, arr) => i === 0 || arr[i] !== arr[i -1] ? char.toUpperCase() : char.toLowerCase()).join('')
}
