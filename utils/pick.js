export const pick = (obj, arr) => {
  return arr.reduce((acc, curr) => {
    curr in obj && (acc[curr] = obj[curr])
    return acc
  }, {})
}
// pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']) -> { 'a': 1, 'c': 3 }
// pick(object, ['a', 'c'])['a'] -> 1
