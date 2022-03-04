// 对于有序表，可以使用二分查找的方式
// 算法复杂度为：O(log2n)

// 使用循环
function search(list, item) {
  let first = 0
  let last = list.length - 1
  let found = false
  while (!found && first <= last) {
    let middle = Math.floor((first + last) / 2)
    if (list[middle] === item) {
      found = true
    } else {
      if (item < middle) {
        last = middle - 1
      } else {
        first = middle + 1
      }
    }
  }
  return found
}

console.log(search([1, 2, 3, 4, 5, 6], 3))
console.log(search([1, 2, 3, 4, 5, 6], 7))