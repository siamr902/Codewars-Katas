// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/javascript

function parse( data ) {
  const arr = [];
  let res = 0;
  for (let j = 0; j < data.length; j++) {
    if (data[j] === 'i') res += 1
    if (data[j] === 'd') res -= 1
    if (data[j] === 's') res *= res
    if (data[j] === 'o') arr.push(res)
  }
  return arr;
}
