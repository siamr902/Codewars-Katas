// https://www.codewars.com/kata/59b401e24f98a813f9000026

function computeDepth (x){
  for(var n = 1, a = new Set();; n++) {
    (x*n+'').split('').forEach(el => a.add(el));
    if (a.size == 10) return n;
  }
}
