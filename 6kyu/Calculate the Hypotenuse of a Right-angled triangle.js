// https://www.codewars.com/kata/525a3d6b85a9a47fcf00055a

function calculateHypotenuse(a,b){
  if (a < 0 || b < 0) {
    throw new Error('Parameters must be positive');
  }
  else if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parameters must be valid numbers')
  }
  else if (isNaN(a) || isNaN(b)) {
    throw new Error('Make them numbers')
  }
  return Math.hypot(a, b).toFixed(3)
}
