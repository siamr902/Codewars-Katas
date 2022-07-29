// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript

function alphabetPosition(text) {
  return text.split('').map(letter => {
    if (/[a-z]/gi.test(letter)) return letter.toUpperCase().charCodeAt(0) - 64
  }).filter(e=> e).join(' ')
}
