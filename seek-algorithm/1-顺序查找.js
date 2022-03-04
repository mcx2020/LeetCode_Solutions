// 算法复杂度为：O(n)

// 无序表
const search = (list, item) => {
  let pos = 0
  let found = false
  while (!found && pos < list.length) {
    if (list[pos] === item) {
      found = true
    } else {
      pos += 1
    }
  }
  return found
}

console.log(search([1, 2, 5, 4, 3, 6], 3))
console.log(search([1, 2, 5, 4, 3, 6], 7))

// 有序表
const search2 = (list, item) => {
  let pos = 0
  let found = false
  while (pos < list.length && !found && item >= list[pos]) {
    if (list[pos] === item) {
      found = true
    } else {
      pos += 1
    }
  }
  return found
}

console.log(search2([1, 2, 3, 4, 5, 6], 3))
console.log(search2([1, 2, 3, 4, 5, 6], 7))