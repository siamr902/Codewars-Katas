// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/javascript

function cleanString(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      stack.pop();
    } else {
      stack.push(s[i])
    } 
  }
  return stack.join('');
}
