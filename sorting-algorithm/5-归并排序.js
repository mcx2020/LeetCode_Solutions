// 算法复杂度：O(nlog2n)
// 将无序表分成左右两个部分，依次递归，分到最后只剩下一个值的列表，最后进行归并。

const mergeSort = (list) => {
  if (list.length === 1) {
    return list
  } else {
    let left = list.slice(0, Math.floor(list.length / 2))
    let right = list.slice(Math.floor(list.length / 2))
    return merge(mergeSort(left), mergeSort(right))
  }

  function merge(a, b) {
    if (a.length === 0) {
      return b
    } else if (b.length === 0) {
      return a
    } else {
      return a[0] < b[0] ? [a[0]].concat(merge(a.slice(1), b)) : [b[0]].concat(merge(a, b.slice(1)))
    }
  }
}

console.log(mergeSort([1, 5, 7, 4, 6, 3, 2]))