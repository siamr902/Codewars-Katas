// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
  function test(decoy) {
    for (let i = 0; i < decoy.length; i++) {
      let next = i + 1;
      if (decoy[i] !== decoy[next] - 1) {
        return decoy[next]
      }
  }
    
  }
  if (test(arr) === undefined) {
    return null
  }
  for (let i = 0; i < arr.length; i++) {
    let next = i + 1;
    if (arr[i] !== arr[next] - 1) {
      return arr[next]
    }
  }
}
