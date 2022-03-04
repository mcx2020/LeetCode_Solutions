// https://leetcode-cn.com/problems/same-tree/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// 递归实现
const isSameTree = (p, q) => {
  if (p === null && q === null) return true
  if (p === null || q === null) return false
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

// 循环实现，不会有调用栈溢出的风险了
const isSameTree2 = (p, q) => {
  let stack = []
  stack.push(p, q)
  while (stack.length > 0) {
    let leftNode = stack.pop()
    let rightNode = stack.pop()
    if (leftNode === null && rightNode === null) continue
    if (leftNode === null || rightNode === null) return false
    if (leftNode.val !== rightNode.val) return false
    stack.push(leftNode.left, rightNode.left)
    stack.push(leftNode.right, rightNode.right)
  }
  return true
}