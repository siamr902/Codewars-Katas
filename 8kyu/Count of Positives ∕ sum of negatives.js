// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  if (input === null) return []
  let positives = [];
  let negatives = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positives.push(input[i])
    }
    else {
      negatives.push(input[i])
    }
  }
  let sumOfNegatives = negatives.reduce((a,b) => a+b, 0);
  if (positives.length === 0 && sumOfNegatives === 0) {
    return [];
  }
  return [positives.length, sumOfNegatives];
  
}
