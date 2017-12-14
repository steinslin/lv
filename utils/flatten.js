export default flatten = arr =>
  arr.reduce((result, item) =>
    Array.isArray(item)
      ? result.concat(flatten(item))
      : result.push(item) && result
        , [])
