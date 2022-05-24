// https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d

function missingNo(nums) {
  const arr = new Array(101).fill(0).map((num, i) => num + i)
  let sort = nums.sort((a,b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (sort.indexOf(arr[i]) === -1) {
      return arr[i]
    }
  }
}
