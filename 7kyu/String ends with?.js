// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function solution(str, ending){
  let start = str.length - ending.length
  let extract = str.slice(start);
  return extract === ending ? true: false;
}
