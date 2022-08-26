// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/javascript

function permutations(string) {
  const res = [];
  dfs(string, string.length, '');
  
  function dfs(str, len, path) {
    if (path.length === len) {
      res.push(path);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      dfs(str.slice(0, i) + str.slice(i + 1), len, path + str[i]);
    }
  }
  return [...new Set(res)];
}
