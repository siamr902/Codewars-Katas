// https://www.codewars.com/kata/559a28007caad2ac4e000083

function perimeter(n) {
    let arr = [0, 1]
    for (let i = 1; i <= n; i++) {
      arr.push(arr[i] + arr[i - 1])
    }
  return arr.reduce((a,b) => a + b, 0) * 4
}
