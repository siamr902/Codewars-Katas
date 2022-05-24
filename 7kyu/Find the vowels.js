// https://www.codewars.com/kata/5680781b6b7c2be860000036

function vowelIndices(word){
  word = word.toLowerCase()
  let br = []
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  for (let i = 0; i < word.length; i++) {
    if (vowels.some(letter => word[i].includes(letter))) {
      br.push(i + 1)
    }
  }
  return br
}
