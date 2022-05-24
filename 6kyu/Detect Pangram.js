// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
  const x = string.toLowerCase().replace(/\s/g, '').replace(/[^A-Za-z]/g, '').split('')
  return [...new Set(x)].length === 26;
  
}
