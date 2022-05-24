// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade (s1, s2, s3) {
  var average = (s1+s2+s3)/3
  return average <=100 && average >= 90 ? 'A' : average < 90 && average >= 80 ? 'B' : average < 80 && average >= 70 ? 'C' :
  average < 70 && average >= 60 ? 'D' : 'F'
}
