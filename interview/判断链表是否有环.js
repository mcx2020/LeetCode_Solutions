// 普通做法，将访问的每个节点都存下来，每次访问都与存储地方做对比
const judgeRing = (node) => {
  const map = new Map()
  while (node) {
    if (map.get(node)) return false
    map.set(node, true)
    node = node.next
  }
  return true
}

// 使用两个快慢指针，如果有环，快指针会追上慢指针
const judgeRing2 = (node) => {
  if (!node) return false
  let slowCursor = node
  let fastCursor = node.next
  while (slowCursor && fastCursor) {
    if (slowCursor === fastCursor) return true
    slowCursor = slowCursor.next
    fastCursor = fastCursor.next
    if (fastCursor) fastCursor = fastCursor.next
  }
  return false
}