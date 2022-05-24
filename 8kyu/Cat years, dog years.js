// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears === 1) {
    var catYears = 15
    var dogYears = 15
  } else if (humanYears === 2) {
    var catYears = 24
    var dogYears = 24
  } else {
    var catYears = 24 + ((humanYears - 2) * 4)
    var dogYears = 24 + ((humanYears - 2) * 5)
  }
  return [humanYears,catYears,dogYears];
}
