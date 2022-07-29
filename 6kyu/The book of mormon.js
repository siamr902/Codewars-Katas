// https://www.codewars.com/kata/58373ba351e3b615de0001c3/javascript

function Mormons(startingNumber, reach, target){
  function dfs(start, mult, tar, count) {
    if (start >= tar) return count;
    
    return dfs(start + start * mult, mult, tar, count + 1);
  }

  return dfs(startingNumber, reach, target, 0);
}
