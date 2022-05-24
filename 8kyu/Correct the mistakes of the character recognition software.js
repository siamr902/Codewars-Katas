// https://www.codewars.com/kata/577bd026df78c19bca0002c0

function correct(string) {
  const mapObj = {
    5: 'S',
    0: 'O',
    1: 'I'
  };
  return string.replace(/5|0|1/g, (correspondence) => {
    return mapObj[correspondence]
  })
}
