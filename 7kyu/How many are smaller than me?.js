// https://www.codewars.com/kata/56a1c074f87bc2201200002e

function smaller(nums) {
  const arr = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        arr[i]++
      }
    }
  }
  return arr
}
