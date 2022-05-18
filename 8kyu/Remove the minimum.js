// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  let newArr = numbers.slice()
  let min = Math.min.apply(null, newArr);
  let fix = newArr.splice(newArr.indexOf(min), 1);
  return newArr;
}
