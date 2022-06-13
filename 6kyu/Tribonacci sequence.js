// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature,n){
  if (!n) return [];
  if (n == 1) return [1]
  for (let i = 2; i < n - 1; i++) {
    signature.push(signature[i] + signature[i-1] + signature[i-2])
  }
  return signature
}
