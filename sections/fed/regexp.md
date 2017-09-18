
<h2 id="2.2">正则表达式</h2>


```
  JavaScript提供了一些方法用于正则表达式，其中5个(2个常用)是正则对象方法，4个是字符串对象方法。
```

> RegExp.prototype.test() //检测一个字符串是否匹配某个正则表达式，如果匹配成功，返回 true ，否则返回 false


> RegExp.prototype.exec() //检索字符串中与正则表达式匹配的值，没有匹配结果返回 null 否则返回一个数组，数组的第一个元素是与正则表达式相匹配的字符串,余下的所有元素包含的是匹配的各个分组。


> RegExp.prototype.compile() //在脚本执行过程中编译正则表达式，也可以改变已有表达式


> RegExp.prototype.tostring()


> RegExp.prototype.toSource()


> String.prototype.match()


> String.prototype.search()


> String.prototype.replace()


> String.prototype.split()


详见：[RegExp对象](http://javascript.ruanyifeng.com/stdlib/regexp.html)







##### Final

> 不断更新中…… 如果发现问题欢迎在 [issues](https://github.com/Aierui/web-develope-questions/issues) 中指出。如果有比较好的问题/知识点/指正，也欢迎提 PR。

