// https://www.codewars.com/kata/530045e3c7c0f4d3420001af/javascript

function lookSay(number){
  number = number.toString();
  const res = [];
  
  for (let i = 0; i < number.length;) {
    let count = 1;
    let j = i;
    while (number[j + 1] === number[j]) {
      count++;
      j++;
    };
    res.push.apply(res, [count, number[i]]);
    i += count;
  }
  return +res.join("");
}
