// https://www.codewars.com/kata/588f3e0dfa74475a2600002a/javascript

function possibilities(str) {
  const possibilities = [];
  
  function dfs(str, options) {
    if (!str.includes("?")) {
      possibilities.push(str);
      return;
    }
    for (let i = 0; i < str.length; i++)  {
      if (str[i] === "?") {
        for (let j = 0; j < options.length; j++) {
          dfs(str.slice(0, i) + options[j] + str.slice(i + 1), options)
        }
      }
    }
  }
  dfs(str, ["0", "1"]);
  return [...new Set(possibilities)]
};
