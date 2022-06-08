// https://www.codewars.com/kata/52ae6b6623b443d9090002c8

function guessGifts(wishlist, presents) {
  const guesses = []
  for (let i = 0; i < wishlist.length; i++) {
    for (let j = 0; j < presents.length; j++) {
      let gift = wishlist[i]
      if (gift.size === presents[j].size
         && gift.clatters === presents[j].clatters
         && gift.weight === presents[j].weight) {
        guesses.push(gift.name)
      }
    }
  }
  return [...new Set(guesses)]
}
