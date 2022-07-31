// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/javascript

function validBraces(braces){
  while (braces.includes('{}') || braces.includes('()') || braces.includes('[]')) {
    braces = braces.replace(/\(\)|\{\}|\[\]/g, '')
  }
  return braces.length == 0
}
