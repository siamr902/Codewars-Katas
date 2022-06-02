// https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords(text) {
  const txt = text.replace(/[^A-Za-z\s']/gi, '').trim().toLowerCase()
  let arr = txt.replace(/\s\s+/g, ' ').split(/\s/)
  const obj = arr.reduce((prev, cur) => {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});
  return Object.keys(obj).sort((a, b) => obj[b] - obj[a]).slice(0, 3).filter(elem => {
    return elem.match(/[A-Za-z]/g)
  })  
}
