// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b){
  return `${Hex(r)}${Hex(g)}${Hex(b)}`
}

const Hex = (val) => {
  if (val <= 0) {return '00'}
  if (val >= 255) {return 'FF'}
  return ('0' + val.toString(16)).slice(-2).toUpperCase()
}
