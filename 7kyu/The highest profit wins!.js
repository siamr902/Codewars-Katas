// https://www.codewars.com/kata/559590633066759614000063

function minMax(arr){
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
 
  return [min, max]
}
