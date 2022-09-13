// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/javascript

function wave(str){
  const res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    res.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
  }
  return res
}
