// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  const odd = array.filter(num => num % 2 != 0).sort((a,b) => a - b)
  return array.map(num => (num % 2 != 0 ? odd.shift() : num))
}
