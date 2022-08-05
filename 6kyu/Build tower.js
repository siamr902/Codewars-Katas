// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript

function towerBuilder(nFloors) {
  const res = [];
  const lim = nFloors * 2 - 1
  
  for (let i = 1, j = 1; i <= nFloors; i++, j+=2)  {
    res.push(' '.repeat((lim - j) / 2) + '*'.repeat(j) + ' '.repeat((lim - j) / 2));
  }
  
  return res
}
