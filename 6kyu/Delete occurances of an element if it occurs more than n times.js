// https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr,n){
  let cache={};
  return arr.filter(v=>(cache[v]=~~cache[v]+1)<=n)
}
