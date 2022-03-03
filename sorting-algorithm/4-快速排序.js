// 算法复杂度：O(nlog2n) ~ O(n2)
// 在无序表中，选一项作为基准值，将剩余的值，比它小的排左边，比它大的放右边，层层递归

function quickSort(list){
  if (list.length <= 1){
    return list
  }else{
    let left = []
    let right = []
    let pivotIndex = Math.floor(list.length / 2)
    let pivotValue = list.splice(pivotIndex,1)[0]
    for(i=0;i<list.length;i++){
      if(list[i]<pivotValue){
        left.push(list[i])
      }else{
        right.push(list[i])
      }
    }
    return quickSort(left).concat([pivotValue],quickSort(right))
  }
}

console.log(quickSort([5,3,2,1,7,4,6]))