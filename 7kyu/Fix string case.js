// https://www.codewars.com/kata/5b180e9fedaa564a7000009a

function solve(s){
    const l = s.toLowerCase()
    let lower = 0,
        upper = 0
    for (let i = 0; i < s.length; i++) {
      if (s[i] === l[i]) {
        lower++
      } else {
        upper++
      }
    }
  return upper > lower ? s.toUpperCase() : s.toLowerCase()
}
