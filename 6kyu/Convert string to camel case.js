// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str){
  const split = str.split(/-|_/);
  const map = split.slice(1).map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  });
  return split[0] + map.join('')
}
