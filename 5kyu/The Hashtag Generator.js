// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str) {
  if (str.length === 0) {
    return false
  };
  const fx = str.split(' ').map(w => capitalize(w.trim())).join('');
  const rep = fx.replace(/\s/g, '');
  if (rep.length === 0 || rep.length > 139)  {
    return false
  }
  return `#${rep}`
}

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
