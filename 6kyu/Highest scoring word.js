// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x){
//   spread syntax to split the words and reduce by their ascii code
  const sum = x.split(' ').map(word => [...word].reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0))
  return x.split(' ')[sum.indexOf(Math.max.apply(null, sum))]
}
