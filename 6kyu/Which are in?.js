// https://www.codewars.com/kata/550554fd08b86f84fe000a58/javascript

function inArray(array1,array2){
  const arr = []
  array1.forEach((item, index) => {
    let found = array2.some(elem => {
      return elem.match(item)
    })
    if (found) arr.push(array1[index])
  })
  return arr.sort()
}
