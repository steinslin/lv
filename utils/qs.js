export function qs (arr) {
  if (arr.length < =1) {
    return
  }
  const left = []
  const right = []
  const p = arr.splice(0, 1)[0]
  for (let v of arr) {
    v < p ? left.push(v) : right.push(v)
  }
}
