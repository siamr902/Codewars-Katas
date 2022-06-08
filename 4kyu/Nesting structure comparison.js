// https://www.codewars.com/kata/520446778469526ec0000001

Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other) || this.length != other.length) return false;
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false
      }
    } else if (Array.isArray(other[i])) {
      return false
    }
  }
  return true
};
