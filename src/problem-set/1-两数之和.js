// https://leetcode-cn.com/problems/two-sum/

// 普通解法
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target)
        return [i, j]
    }
  }
}

// 建一个 hash 表，这样只需遍历一遍
const twoSum2 = (nums, target) => {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (diff in hash) {
      return [i, hash[diff]]
    } else {
      hash[nums[i]] = i
    }
  }
  return []
}

