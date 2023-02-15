// https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69

function hamming(a,b) {
  let noMatch = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) noMatch++;
  }
  return noMatch;
}
