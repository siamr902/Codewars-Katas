// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
//   dont have to use replace 
    return word.toLowerCase().split('').map((char, i, arr) => {
      return arr.indexOf(char) === arr.lastIndexOf(char) ? '(' : ')'
    }).join('')
}
