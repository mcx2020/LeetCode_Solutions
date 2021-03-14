## Day1 打卡

## 题目：
* [面试题 01.03. URL化](https://leetcode-cn.com/problems/string-to-url-lcci/)
* [1528. 重新排列字符串](https://leetcode-cn.com/problems/shuffle-string/)

## 解答


### Java

**面试题 01.03. URL化**

```Java
class Solution {
    public String replaceSpaces(String S, int length) {    
        char[] ch = new char[length * 3];
        int index = 0;
        for (int i = 0; i < length; i++) {
            char c = S.charAt(i);
            if (c == ' ') {
                ch[index++] = '%';
                ch[index++] = '2';
                ch[index++] = '0';
            } else {
                ch[index] = c;
                index++;
            }
        }
        return new String(ch, 0, index);
    }
}
```
```Java
class Solution {
    public String replaceSpaces(String S, int length) {
        return S.substring(0,length).replace(" ","%20");
    }
}
```
```JavaScript
const replaceSpaces = function(S, length) {
    return encodeURIComponent(S.substring(0,length))
};
```


**1528. 重新排列字符串**
```JavaScript
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

