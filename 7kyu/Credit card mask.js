// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
  if (cc.length < 4) return cc
  const ls = cc.slice(0, cc.length - 4)
  return ls.replace(/[A-Za-z0-9]/g, '#') + cc.slice(cc.length - 4)
}
