// https://www.codewars.com/kata/595bbea8a930ac0b91000130/javascript 

function calculate1RM(w, r){
  if (r === 1) return w;
  if (r === 0) return 0;
  
  const epley = (l,s) => l + (l*s/30);
  const mcglothin = (l,s) => (100*l) / (101.3 - (2.67123 * s));
  const lombardi = (l,s) => l * Math.pow(s, 0.10);
  
  return Math.round(Math.max(lombardi(w,r), mcglothin(w,r), epley(w,r)));
}
