// https://www.codewars.com/kata/525821ce8e7b0d240b002615/javascript

function camelize(str) {
  return str
    .replace(/[^a-z0-9]/gi,' ')
    .split(' ')
    .map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}
