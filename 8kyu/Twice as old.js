// https://www.codewars.com/kata/5b853229cfde412a470000d0

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld - sonYearsOld*2 === 0 ? 0 : Math.max(dadYearsOld - sonYearsOld*2, sonYearsOld*2 - dadYearsOld)
}
