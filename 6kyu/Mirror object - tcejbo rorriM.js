// https://www.codewars.com/kata/586305e8916e244b66001a93/javascript

const mirror = obj => {
  const mirroredObj = {};
  for (const prop in obj) {
    mirroredObj[prop] = reversed(prop)
  }
  
  return mirroredObj
};

function reversed(string) {
  return string.split``.reverse().join``
}
