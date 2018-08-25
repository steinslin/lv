export function insertSort (arr) {
  var temp
  var len = arr.length
  for (var i = 1; i < len; i++) {
    temp = arr[i]
    for (var j = i; j > 0 && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = temp
  }
}
