// https://www.codewars.com/kata/53046ceefe87e4905e00072a/javascript

function palindrome(string) {
  string = string.replace(/[^A-Z0-9]/gi, "").toUpperCase()
  let left = 0, right = string.length - 1;
  
  while (left <= right) {
    if (string[left] !== string[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
}
