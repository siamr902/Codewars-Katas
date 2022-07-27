// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/javascript

const sumCube = str => str.split``.map(n => Math.pow(+n,3)).reduce((a,b) => a + b) % 2;
const reverse = str => str.split``.reverse().join``;
const rotate = str => [...str].slice(1).join`` + str[0]

function revrot(str, sz) {
  if (!str || sz <= 0) return '';
  
  let arr = [];
  for (let i = 0; i < str.length; i+=sz) {
    arr.push(str.slice(i, i + sz))
  }
  arr = arr.filter(chunk => chunk.length === sz);
  
  const res = [];
  
  arr.forEach(chunk => {
    if (!sumCube(chunk)) res.push(reverse(chunk))
    else res.push(rotate(chunk))
  });
  
  return res.join('')
}
