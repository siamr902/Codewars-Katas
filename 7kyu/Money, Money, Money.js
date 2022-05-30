// https://www.codewars.com/kata/563f037412e5ada593000114

function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) return 0;
  let count = 0, t = 1 + interest, prevPrincipal, n
  while (principal <= desired) {
    prevPrincipal = principal
    principal *= t
    n = principal - prevPrincipal
    principal -= tax * n
    count++
  }
  return count
}
