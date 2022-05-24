// https://www.codewars.com/kata/52e1476c8147a7547a000811

function validate(password) {
  const up = /[A-Z]/.test(password)
  const low = /[a-z]/.test(password)
  const d = /\d/.test(password)
  if (password.replace(/[A-Za-z0-9]/g, '').length > 0) return false
  return up && low && d && password.length > 5
}
