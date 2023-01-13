// https://www.codewars.com/kata/57f625992f4d53c24200070e

function bingo(ticket, win){
  let miniWins = 0;
  for (let i = 0; i < ticket.length; i++) {
    const [string, value] = ticket[i];
    for (let j = 0; j < string.length; j++) {
      if (string[j].charCodeAt(0) === value) {
        miniWins++
        break;
      }
    }
  }
  return miniWins >= win ? "Winner!" : "Loser!";
}
