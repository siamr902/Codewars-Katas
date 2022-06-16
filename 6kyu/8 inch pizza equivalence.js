// https://www.codewars.com/kata/599bb194b7a047b04d000077/javascript

function howManyPizzas(n) {
  const pizzas = Math.floor((Math.pow(n/2,2)*Math.PI)/(Math.pow(8/2,2)*Math.PI));
  const left = (Math.pow(n/2,2)*Math.PI)/(Math.pow(8/2,2)*Math.PI) - pizzas;
  const slices = Math.round(8 * left)
  return `pizzas: ${pizzas}, slices: ${slices}`
}
