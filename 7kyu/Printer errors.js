// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
  var re = /[n-z]/gi
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(re)) {
      count += 1
    }
  }
  return `${count}/${s.length}`
}
