// https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((a,b) => a + b, 0) / classPoints.length
  return yourPoints > average ? true: false;
}
