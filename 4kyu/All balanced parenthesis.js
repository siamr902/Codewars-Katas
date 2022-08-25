// https://www.codewars.com/kata/5426d7a2c2c7784365000783/javascript

function balancedParens(n) {
  const res = [];
  dfs(n, 0, 0, '');
  
  function dfs(max, open, close, str) {
    if (str.length === max * 2) {
      res.push(str);
      return;
    }
    
    if (open < max) dfs(max, open + 1, close, str + '(');
    if (close < open) dfs(max, open, close + 1, str + ')');
  }
  
  return res;
}
