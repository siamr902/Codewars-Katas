// https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8/javascript

function array_diff_very_fast(a, b) {
  const set = new Set(b);
  return a.filter(n => !set.has(n));
}
