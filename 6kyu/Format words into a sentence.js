// https://www.codewars.com/kata/51689e27fe9a00b126000004/javascript

function formatWords(words){
  words = words ? words.filter(n => n) : "";
  if (words.length === 1) return words[0];
  let result = "";
  
  for (let i = 0; i < words.length; i++) {
    if (i === words.length - 2) {
      result += `${words[i]} and ${words[i + 1]}`;
      break;
     }
    result += `${words[i]}, `;
  }
  return result;
}
