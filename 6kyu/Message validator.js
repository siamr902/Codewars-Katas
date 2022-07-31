// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/javascript 

function isAValidMessage(message){
  if (message === '') return true;
  
  const arr = message.split(/\d/g).filter(e=>e);
  const numsArr = message.match(/[0-9]+/g);
  
  if (arr.length !== numsArr.length) return false;
  if (!Number.isInteger(+message[0])) return false;
  
  return arr.every((word, i) => word.length === +numsArr[i])
}
