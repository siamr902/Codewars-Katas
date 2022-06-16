// https://www.codewars.com/kata/564057bc348c7200bd0000ff/javascript

function thirt(n) {
  const pattern = [1,10,9,12,3,4,1]
  let num = n;
  while (true) {
    let temp = num
    num = num.toString().split('').reverse().map(Number)
    .map((e,i) => e*pattern[i%6])
    .reduce((a,c) => a + c, 0)
    if (num === temp) {
      break
    }
  }
  return num
}
