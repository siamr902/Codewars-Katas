// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function(busStops){
//   destructure the array to its first and second values
  return busStops.reduce((a,[first, second]) => a + first - second, 0)
}
