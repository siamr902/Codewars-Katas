// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/javascript

function zeros (n) {
  let x = 1, sum = 0;
  while (sum <= n) {
    sum += Math.pow(5,x);
    x+=1
  }
  
  let count = 0;
  while (x > 0) {
    count += Math.floor(n/Math.pow(5,x));
    x-=1
  }
  
  return count
}
