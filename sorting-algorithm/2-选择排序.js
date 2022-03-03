// 算法复杂度：O(n2)
// 对于无序表每次选出一个最小（或最大）值，单独取出来放到首位，然后然后剩余继续排序

// 采用递归
// 每次取最小值放到列表的首位
function selectionSort(list){
  if(list.length <= 2){
    return list[0]<list[1] ? list : list.reverse()
  }else{
    let minValue = Math.min(...list)
    let minIndex = list.indexOf(minValue)
    list.splice(minIndex,1)
    return [minValue].concat(selectionSort(list))
  }
}

console.log(selectionSort([6,8,7,3,5,4,2,1,0,9]))