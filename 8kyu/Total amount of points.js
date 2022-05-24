// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  const sum = games.reduce((acc, curr) => {
    return acc += curr[0] > curr[2] ? 3 : curr[0] === curr[2] ? 1 : 0
  }, 0)
  return sum
}
