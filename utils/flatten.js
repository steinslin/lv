export const flatten = arr =>
  arr.reduce((result, item) =>
    Array.isArray(item)
      ? result.concat(flatten(item))
      : result.push(item) && result
    , [])

/*
**  更精炼
*/
export const flatten2 = arr =>
  arr.reduce((result, item) =>
    result.concat(Array.isArray(item) ? flatten2(item) : item)
    , [])
