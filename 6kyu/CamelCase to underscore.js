// https://www.codewars.com/kata/5b1956a7803388baae00003a

const toUnderScore = name => {
  return name.replace(/([A-Z]|\d+)/g, '_$1').replace(/^_/g, '').replace(/__/g, '_')
}
