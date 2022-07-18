// https://www.codewars.com/kata/541c8630095125aba6000c00/javascript

function digital_root(n) {
  if (n.toString().length === 1) return n
  
  return digital_root((''+n).split``.reduce((a,b) => a + +b, 0))
}
