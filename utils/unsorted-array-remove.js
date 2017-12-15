/*
usage:
let list = ['a', 'b', 'c', 'd', 'e']
remove(list, 2) // remove 'c'
console.log(list) // returns ['a', 'b', 'e', 'd'] (no 'c')

This works by popping the last element
(which is fast because it doesn't need shift all array elements)
and overwriting the removed index with this element.
 */

export function remove (arr, i) {
  if (i >= arr.length || i < 0) return
  var last = arr.pop()
  if (i < arr.length) {
    var tmp = arr[i]
    arr[i] = last
    return tmp
  }
  return last
}
