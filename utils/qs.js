export function qs (arr) {
  if (arr.length <= 1) {
    return arr
  }
  const left = []
  const right = []
  const p = arr.splice(0, 1)[0]
  for (let v of arr) {
    v < p ? left.push(v) : right.push(v)
  }
  return [...qs(left), p, ...qs(right)]
}

function qsort (arr, low = 0, high = arr.length - 1) {
  if (low >= high) {
    return
  }
  var start = low
  var end = high
  var r = Math.floor(Math.random() * (high - low + 1)) + low

  // 交换
  var temp = arr[start]
  arr[start] = arr[r]
  arr[r] = temp

  var p = arr[start]

  while (start < end) {
    while (start < end && arr[end] >= p) {
      --end
    }
    arr[start] = arr[end]
    while (start < end && arr[start] <= p) {
      ++start
    }
    arr[end] = arr[start]
  }
  arr[start] = p
  qsort(arr, low, start - 1)
  qsort(arr, start + 1, high)
}

let arr = [1, 33, 22, 44, 19, 18, 7, 10, 90, 3, 1, 33, 22, 44, 19, 18, 7, 10, 90, 3, 1, 33, 22, 44, 19, 18, 7, 10, 90, 3, 1, 33, 22, 44, 19, 18, 7, 10, 90, 3]

console.time('qs')
qs(arr)
console.timeEnd('qs')

arr = [1, 33, 22, 44, 19, 18, 7, 10, 90, 3, 1, 33, 22, 44, 19, 18, 7, 10, 90, 3, 1, 33, 22, 44, 19, 18, 7, 10, 90, 3, 1, 33, 22, 44, 19, 18, 7, 10, 90, 3]
console.time('qsort')
qsort(arr)
console.timeEnd('qsort')
