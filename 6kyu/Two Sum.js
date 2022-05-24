// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
  var map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]), i]
    } else {
      map.set(numbers[i], i)
    }
  }
}
