// https://www.codewars.com/kata/56b3b9c7a6df24cf8c00000e/javascript

function arrayDepth(array) {
  let count = 1;
	for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      count = 1 + arrayDepth(array[i])
    }
  }
  return count;
}
