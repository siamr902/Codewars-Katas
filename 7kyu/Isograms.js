// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){
//   set all values must be unique; size counts the # of unique values
  return new Set(str.toLowerCase()).size === str.length;
}
