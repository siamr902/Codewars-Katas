// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

function past(h, m, s){
  const hours = h * 3600;
  const minutes = m * 60;
  
  return (hours + minutes + s) *1000
}
