// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/javascript

function solution(number){
  let res = "";
  const dictionary = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }
    
  const romans = Object.keys(dictionary).reverse();
  
  for (const key of romans) {
    while (number >= dictionary[key]) {
      res += key;
      number -= dictionary[key];
    }
  }
  
  return res
}
