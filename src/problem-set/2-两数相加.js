// https://leetcode-cn.com/problems/add-two-numbers/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const addTwoNumbers = (l1, l2) => {
  let head = null
  let cursor = null
  let carry = 0
  while (l1 || l2) {
    const n1 = (l1 && l1.val) || 0
    const n2 = (l2 && l2.val) || 0
    const sum = n1 + n2 + carry
    if (!head) {
      head = cursor = new ListNode(sum % 10)
    } else {
      cursor.next = new ListNode(sum % 10)
      cursor = cursor.next
    }
    carry = Math.floor(sum / 10)
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (carry > 0) {
    cursor.next = new ListNode(carry)
  }
  return head
}