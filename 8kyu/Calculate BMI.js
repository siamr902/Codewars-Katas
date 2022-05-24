// https://www.codewars.com/kata/57a429e253ba3381850000fb

function bmi(weight, height) {
  const BMI = weight/(height*height)
  return BMI <= 18.5 ? 'Underweight' : BMI <= 25 ? 'Normal' : BMI <= 30.0 ? 'Overweight' : 'Obese'
}
