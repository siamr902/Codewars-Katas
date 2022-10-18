// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/javascript

function compose(...functions) {
  return (a) => {
    return functions.reduceRight((acc, curr) => curr(acc), a)
  }
}
