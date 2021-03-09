## Day1 打卡

## 题目：
* [面试题 01.03. URL化](https://leetcode-cn.com/problems/string-to-url-lcci/)
* [1528. 重新排列字符串](https://leetcode-cn.com/problems/shuffle-string/)

## 解答

**面试题 01.03. URL化**
```
const replaceSpaces = function(S, length) {
    return encodeURIComponent(S.substring(0,length))
};
```

**1528. 重新排列字符串**
```
const restoreString = function(s, indices) {
    const array = []
    for(let i = 0;i<indices.length;i++){
        array[indices[i]] = s[i]
    }
    return array.join('')
}
```

## 总结：

对 JavaScript 语言特性更熟悉了
* 搞懂了 escape()、encodeURI()、encodeURIComponent() 这三个函数的区别
* 对算法有一种别样的感觉，做算法题原来是这个样子滴

