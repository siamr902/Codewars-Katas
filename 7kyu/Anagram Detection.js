// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

var isAnagram = function(test, original) {
  if (test.length !== original.length) return false
  const org = original.toLowerCase().split('')
  const tst = test.toLowerCase().split('')
  return tst.every(letter => org.includes(letter)) && org.every(letter => tst.includes(letter))
};
