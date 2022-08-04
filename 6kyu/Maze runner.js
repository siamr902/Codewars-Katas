// https://www.codewars.com/kata/58663693b359c4a6560001d6/javascript

function mazeRunner(maze, directions) {
  let coords = [];
  const final = [];
    
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze.length; j++) {
      if (maze[i][j] == 2) coords.push(i, j)
      if (maze[i][j] == 3) final.push(i, j)
    }
  }
  
  let [y, x] = coords;
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] == 'N') y--;
    if (directions[i] == 'S') y++;
    if (directions[i] == 'E') x++;
    if (directions[i] == 'W') x--;  
    if (y >= maze.length || x >= maze.length) return 'Dead';
    if (y < 0 || x < 0) return 'Dead';
    if (maze[y][x] == 1) return 'Dead';
    if (y == final[0] && x == final[1]) return 'Finish';
  }
      
  return 'Lost';
}
