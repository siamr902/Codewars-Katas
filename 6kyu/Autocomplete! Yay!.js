// https://www.codewars.com/kata/5389864ec72ce03383000484/javascript

function autocomplete(input, dictionary){
  input = input.replace(/[^a-z]/gi, '');
  const matches = dictionary.map(word => {
    if (word.match(new RegExp(`^${input}`, 'gi'))) return word;
  }).filter(n => n);
  
  return matches.slice(0,5)
}
