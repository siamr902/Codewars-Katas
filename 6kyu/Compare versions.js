// https://www.codewars.com/kata/53b138b3b987275b46000115/javascript

function compareVersions (version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  
  const minLength = Math.min(version1.length, version2.length);
  
  for (let i = 0; i < minLength; i++) {
    if (+v1[i] < +v2[i]) return false
    else if (+v1[i] > +v2[i]) return true
  }
  return v1.length >= v2.length;
}
