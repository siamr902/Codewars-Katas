// https://www.codewars.com/kata/592e830e043b99888600002d

function encode(str,  n) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const mp = str.split('').map(char => letters.indexOf(char) + 1);
  const nums = [...n.toString().repeat(Math.ceil(str.length / n.toString().length))
  .slice(0, str.length)]
  return mp.map((letter, index) => letter + +nums[index]);
}
