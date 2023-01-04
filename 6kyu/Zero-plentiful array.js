// https://www.codewars.com/kata/59e270da7997cba3d3000041/javascript

function zeroPlentiful(arr){
  let sequences = 0;
  let count = 0;
  
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      if (count >= 4) {
        sequences++;
        count = 0;
      } else if (count > 0 && count < 4) {
        return 0
      }
    }
  }
  return sequences;
}
