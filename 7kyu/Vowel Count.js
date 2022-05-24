// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  let vowelsCount = 0;
  
  return str.split('').filter(x => x === 'a' || x === 'e' || x ==='i' || x ==='o' || x ==='u').length
  
}
