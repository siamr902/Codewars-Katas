// https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/javascript

function permuteAPalindrome (input) { 
  const res = input.split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, {})
  const out = Object.keys(res).filter(key => res[key] % 2 === 0);

  return out.length === [...new Set([...input])].length - 1 ? Boolean(1) :
  out.length === [...new Set([...input])].length ? Boolean(1) : Boolean(0)
}
