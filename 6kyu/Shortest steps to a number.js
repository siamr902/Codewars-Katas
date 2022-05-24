// https://www.codewars.com/kata/5cd4aec6abc7260028dcd942

function shortestStepsToNum(num) {
  var step = 0;
  while (num > 1) {
    if (Number.isInteger(num / 2)) {
      num /= 2
      step += 1
    } else {
      num -= 1
      step += 1
    }
  }
  return step
}
