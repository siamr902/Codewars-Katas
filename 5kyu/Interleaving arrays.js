// https://www.codewars.com/kata/523d2e964680d1f749000135/solutions/javascript

function interleave(...arrays) {
  const max = Math.max(...arrays.map(array => array.length));
  
  const res = [];
  
  for (let i = 0; i < max; i++) {
    arrays.forEach(arr => {
      arr[i] === undefined ? res.push(null) : res.push(arr[i]);
    });
  };
  
  return res
}
