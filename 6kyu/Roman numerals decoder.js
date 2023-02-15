// https://www.codewars.com/kata/51b6249c4612257ac0000005

function solution (roman) {
  const converts = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
  ]);
  
  let result = 0;
  
  for (let i = 0; i < roman.length; i++) {
    if (converts.get(roman[i+1]) > converts.get(roman[i])) {
      result += (converts.get(roman[i+1]) - converts.get(roman[i]));
      i += 1;
    } else {
      result += converts.get(roman[i]);
    }
  }
  return result;
}
