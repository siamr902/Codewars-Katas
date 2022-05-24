// https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder=function(iterable){
  if (typeof iterable === 'string') {
    return iterable.split('').filter((elem, index, arr) => 
      arr[index] !== arr[index + 1]
    )
  };
  return iterable.filter((elem, index, arr) => 
    arr[index] !== arr[index + 1]
  )
}
