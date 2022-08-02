// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/javascript

function pickPeaks(arr){
  const res = {pos: [], peaks: []};
  
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    if (arr[j+1] == arr[j] && arr[j-1] < arr[j]) {
    while (arr[j+1] == arr[j]) j++;
    if (arr[j+1] < arr[i]) {
      res.pos.push(i)
      res.peaks.push(arr[i])
      i += (j - i)
      continue;
      }
    }
    if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
      res.pos.push(i)
      res.peaks.push(arr[i])
    }
  }
  return res
}
