// https://www.codewars.com/kata/590e03aef55cab099a0002e8

function incrementer(nums) { 
  return nums.map((num, i) => num + (i + 1) >= 10 ? Number((num + (i + 1)).toString().split('').pop()) : num + (i + 1))
}
