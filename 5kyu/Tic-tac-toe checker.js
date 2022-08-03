// https://www.codewars.com/kata/525caa5c1bf619d28c000335/javascript 

function isSolved(board) {
  const winningCombinations = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8]
  ]
  
  const new_board = board.reduce((a,b) => a.concat(b), []);
  
//   check x
  if (winningCombinations.some(combination => {
    return combination.every(index => {
      return new_board[index] === 1
    })
  })) {
    return 1;
  }
// check o
  if (winningCombinations.some(combination => {
    return combination.every(index => {
      return new_board[index] === 2
    })
  })) {
    return 2;
  }
// if none returned, check draw
  return new_board.some(element => element === 0) ? -1 : 0;
}
