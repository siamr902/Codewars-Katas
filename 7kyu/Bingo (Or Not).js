// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145

function bingo(a) {
  const filt = [9, 14, 15, 7, 2]
  return filt.every(elem => a.includes(elem)) ? 'WIN' : 'LOSE'
}
