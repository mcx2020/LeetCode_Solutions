// 算法复杂度：O(n^2)
// 对于无序表进行多趟比较交换，每趟的过程类似于气泡在水中不断上浮到水面的过程

// 采用递归
// 每次把最大值冒泡到列表尾部
const bubbleSort = (list) => {
  if (list.length <= 2) {
    return list[0] < list[1] ? list : list.reverse()
  } else {
    let index = 0
    while (index + 1 <= list.length - 1) {
      if (list[index] < list[index + 1]) {
        index += 1
      } else {
        let temp = list[index]
        list[index] = list[index + 1]
        list[index + 1] = temp
        index += 1
      }
    }
    let max = list.splice(-1, 1)[0]
    return bubbleSort(list).concat([max])
  }
}

console.log(bubbleSort([6, 8, 7, 3, 5, 4, 2, 1, 0, 9]))