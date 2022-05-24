// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
  return Math.min(...Object.keys(recipe).map(e => Math.floor(available[e] / recipe[e]) || 0))
}
