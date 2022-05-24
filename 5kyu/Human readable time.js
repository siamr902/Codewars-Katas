// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable (seconds) {
  const hours = parseInt(seconds / 3600);
  const minutes = parseInt(seconds / 60) % 60;
  const secs = seconds % 60;
  
  const zero = (val) => {
    return val < 10 ? `0${val}` : val;
  }
  
  
  return `${zero(hours)}:${zero(minutes)}:${zero(secs)}`
}
