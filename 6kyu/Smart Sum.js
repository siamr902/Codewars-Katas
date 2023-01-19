// https://www.codewars.com/kata/5831200eb812b8016d000094/javascript

function smartSum(...args){
  let sum = 0;
  for (let elem of args) {
    if (Array.isArray(elem)) {
      elem = elem.flat(Infinity);
      sum += elem.reduce((a,b) => a + b, 0);
    } else {
      sum += elem;
    }
  }
  return sum;
}
