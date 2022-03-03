// 算法复杂度：O(n2)
// 对于无序表中后面的每一项，与前面排好序的列表对比进行插入

// 采用循环
// 从第一项开始进行插入排序
function insertionSort(list){
  let newList = [list[0]]
  if(list.length === 1) return newList
  for (let i=1;i<list.length;i++){
    let newValue = list[i]
    if (newValue>newList[newList.length-1]){
      newList.push(newValue)
    }else if(newValue<newList[0]){
      newList.unshift(newValue)
    }else{
      for(let j=0;j<newList.length-1;j++){
        if (newList[j] <= newValue && newValue <= newList[j+1]){
          newList.splice(j+1,0,newValue)
          break
        }
      }
    }
  }
  return newList
}

console.log(insertionSort([2,1,45,3,4]))