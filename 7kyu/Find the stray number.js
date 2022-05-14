// https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers) {
  const stray = nums => nums.reduce((a, b) => a ^ b); 
  const res = stray(numbers)
  return res
}
