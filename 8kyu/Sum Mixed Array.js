// https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x){
  return x.map(num => Number(num)).reduce((a,b) => a+b, 0);
  
}
