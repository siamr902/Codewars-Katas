// https://www.codewars.com/kata/58d76854024c72c3e20000de/javascript

function reverse(str){
  str = str.replace(/\s\s+/g, " ").split(' ');
  for (let i = 1; i < str.length; i+=2) {
    str[i] = [...str[i]].reverse().join("")
  };
  return !/[a-z0-9-_]/i.test(str) ? "" : str.join(" ")
}
