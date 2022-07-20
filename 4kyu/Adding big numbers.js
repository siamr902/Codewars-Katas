// https://www.codewars.com/kata/525f4206b73515bffb000b21/javascript

function add(a, b) {
  a = a.split('');
  b = b.split('');
  
  let res = '', rem = 0;
  
  while (a.length || b.length || rem) {
    rem = rem ? ~~a.pop() + ~~b.pop() + 1 
    : ~~a.pop() + ~~b.pop();
    res = (rem % 10) + res;
    rem = rem > 9;
  }
  
  return res;
}
