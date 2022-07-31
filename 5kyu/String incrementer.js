// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/javascript

function incrementString (string) {
  if (!/\d/.test(string[string.length - 1])) return string + '1';
  if (string.length === 1) return `${+string + 1}`;
  const mod = string.split``.reverse().join``;
  const res = [];
  let i = 0;  
  while (mod[i].match(/[1-9]/)) {
    res.push(mod[i]);
    i++
  }
  const num = +res.reverse().join('') + 1;
  if (`${num}`.length > res.length) {
    return string.slice(0, string.length - res.length).replace('0', '') + `${num}`
  }
  return string.slice(0, string.length - res.length) + `${num}`
}
