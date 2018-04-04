export function countOccurrences (arr, value) {
  return arr.reduce((result, v) => v === value ? ++result : result + 0, 0)
}
