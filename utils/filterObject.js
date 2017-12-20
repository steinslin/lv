/*
 * from lodash https://github.com/lodash/lodash/blob/master/filterObject.js
 * const object = { 'a': 5, 'b': 8, 'c': 10 }
 *
 * filterObject(object, (n) => !(n % 5))
 * // => [5, 10]
 */

export function filterObject (object, predicate) {
  object = Object(object)
  const result = []

  Object.keys(object).forEach((key) => {
    const value = object[key]
    if (predicate(value, key, object)) {
      result.push(value)
    }
  })
  return result
}
