## Day1 打卡 20210314

## 题目：
* [面试题 01.03. URL化](https://leetcode-cn.com/problems/string-to-url-lcci/)
* [1528. 重新排列字符串](https://leetcode-cn.com/problems/shuffle-string/)

## 解答

**面试题 01.03. URL化**

Java
```Java
// 遍历字符串，对每个字符做判断添加到字符数组
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
// 使用内置的字符串替换 API
class Solution {
    public String replaceSpaces(String S, int length) {
        return S.substring(0,length).replace(" ","%20");
    }
}
```
```Java
// 遍历字符串，对每个字符做判断添加到字符串数组
class Solution {
    public String replaceSpaces(String S, int length) {
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<length;i++){
            char ch = S.charAt(i);
            if(ch == ' '){
                sb.append("%20");
            }else{
                sb.append(ch);
            }
        }
        return sb.toString();
    }
}
```
JavaScript
```JavaScript
// 遍历每个字符串，将字符添加到数组中
const replaceSpaces = function(S, length){
    const array = []
    for(let i=0;i<length;i++){
        if(S[i] === ' ' ){
            array.push('%20')
        }else{
            array.push(S[i])
        }
    }
    return array.join('')
}
```
```JavaScript
// 使用正则替换
const replaceSpaces = function(S, length) {
    return S.substring(0,length).replace(/\s/g,'%20')
};
```
```JavaScript
// 使用内置的处理URI相关的 API 
const replaceSpaces = function(S, length) {
    return encodeURIComponent(S.substring(0,length))
};
```
```JavaScript
// 使用数组 API，空格分割，再合并
const replaceSpaces = function(S, length) {
    return S.substring(0,length).split(' ').join('%20')
};
```

**1528. 重新排列字符串**
Java
```Java
class Solution {
    public String restoreString(String s, int[] indices) {
        int length = s.length();
        char[] ch = new char[length];
        for(int i=0;i<length;i++){
            ch[indices[i]] = s.charAt(i);
        }
        return new String(ch);
    }
}
```

JavaScript
```JavaScript
const restoreString = function(s, indices) {
    const array = []
    for(let i = 0;i<s.length;i++){
        array[indices[i]] = s[i]
    }
    return array.join('')
};
```

## 总结：

熟悉了一下 Java 语言的语法
* 定义字符数组 char[]
* 获取字符串s的第i个字符 s.charAt(i)
* 理解字符数组的含义

新学到/熟悉了 JavaScript 的几个 API
* encodeURI()、encodeURIComponent() 的区别
    * encodeURI() 不会对数字、字母、 `- _ . ! ~ * ' ( )`和`; , / ? : @ & = + $` 进行转义
    * encodeURIComPonent() 不会对数字、字母、 `- _ . ! ~ * ' ( )` 进行转译
* 正则表达式 \s 匹配任意的空白符

