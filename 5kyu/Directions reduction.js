// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
  let str = arr.join('');
  const pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/i
  while (pattern.test(str)) {
    str = str.replace(pattern, '')
  };
  return str.match(/NORTH|SOUTH|EAST|WEST/g) || []
}
