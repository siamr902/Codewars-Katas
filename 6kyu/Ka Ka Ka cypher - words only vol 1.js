// https://www.codewars.com/kata/5934d648d95386bc8200010b

function kaCokadekaMe(word) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let res = "ka";
  
  for (let i = 0; i < word.length - 1; i++) {
    if (vowels.includes(word[i]) && !vowels.includes(word[i+1])) {
      res += (word[i] + "ka");
    } else {
      res += word[i];
    }
  }
  return res + word.at(-1);
}
