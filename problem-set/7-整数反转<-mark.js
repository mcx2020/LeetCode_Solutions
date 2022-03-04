// https://leetcode-cn.com/problems/reverse-integer/
// 面试时考过它的变体，考虑小数的情况

// 一个不错的解法
const reverse = (num) => {
  let newNum = 0
  while (num) {
    newNum = newNum * 10 + num % 10
    num = ~~(num / 10)
  }
  if (newNum < -Math.pow(2, 31) || newNum > Math.pow(2, 31) - 1) {
    return false
  }
  return newNum
}

// 普通解法，写得比较丑，思路和上面吗一样
// "～"这个运算符很妙，如果不用它，就需要像如下这样判断数字正负
const reverse2 = (num) => {
  let minusFlag = false
  if (num < 0) {
    minusFlag = true
    num = -num
  }
  let posNum = 0
  while (num) {
    posNum = posNum * 10 + num % 10
    num = Math.floor(num / 10)
  }
  let result = minusFlag ? -posNum : posNum
  if (result >= -Math.pow(2, 31) && result <= Math.pow(2, 31) - 1) {
    return result
  }
  return 0
}

// 进阶：考虑带小数的情况
// .号前后分别反转
// 输入:-123.567
// 输出:-321.765
// 这里忽略32位这种条件
const reverseAdvanced = (num) => {
  let a = String(num).split('.')
  const intPart = reverse(Number(a[0]))
  const restPart = reverse(Number(a[1]))
  if (restPart) {
    return Number(intPart + '.' + restPart)
  } else {
    return Number(intPart)
  }
}