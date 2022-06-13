// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/javascript

function findMissingLetter(array) {
  for (let i = 0; i < array.length; i++) {
    const currentLetter = array[i].charCodeAt(0)
    const nextLetter = array[i+1].charCodeAt(0)
    if (currentLetter + 1 !== nextLetter) {
      return String.fromCharCode(currentLetter + 1)
    }
  }
}
