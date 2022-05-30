

function validParentheses(parens) {
  let inc = 0
  for (let i = 0; i < parens.length; i++) {
    if (inc < 0) return false
    if (parens[i] === '(') inc++
    if (parens[i] === ')') inc--
  }
  return inc === 0
}
