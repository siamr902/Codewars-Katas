// https://www.codewars.com/kata/56747fd5cb988479af000028/javascript

function getMiddle(s) {
  const middle = Math.floor(s.length / 2);
  if (s.length % 2 !== 0) {
    return s[middle]
  } else {
    return `${s[middle-1]}${s[middle]}`
  }
}
