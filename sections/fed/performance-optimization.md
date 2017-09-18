<h2 id="3.5">性能优化</h2>

#### 谈谈你对重构的理解

网站重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。也就是说是在不改变UI的情况下，对网站进行优化，
在扩展的同时保持一致的UI。


    对于传统的网站来说重构通常是：

    表格(table)布局改为DIV+CSS

    使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对IE6有效的)

    对于移动平台的优化

    针对于SEO进行优化

    深层次的网站重构应该考虑的方面


    减少代码间的耦合

    让代码保持弹性

    严格按规范编写代码

    设计可扩展的API

    代替旧有的框架、语言(如VB)

    增强用户体验

    通常来说对于速度的优化也包含在重构中



    压缩JS、CSS、image等前端资源(通常是由服务器来解决)

    程序的性能优化(如数据读写)

    采用CDN来加速资源加载

    对于JS DOM的优化

    HTTP服务器的文件缓存



#### 谈谈性能优化问题

> 性能优化的原则

```
  多使用内存、缓存或者其他方法

  减少CPU计算、减少网络请求、减少IO
```



- 代码层面：避免使用 css 表达式，避免使用高级选择器，通配选择器。

- 缓存利用：缓存 Ajax，使用 CDN，使用外部 js 和 css 文件以便缓存，添加 Expires 头，服务端配置 Etag ，减少 DNS 查找等

- 请求数量：合并样式和脚本，使用 css 图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载。

- 请求带宽：压缩文件，开启 GZIP，



> 代码层面的优化

```
    用 hash-table 来优化查找

    少用全局变量

    用 innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 javascript 性能

    用 setTimeout 来避免页面失去响应

    缓存DOM节点查找的结果

    避免使用CSS Expression

    避免全局查询

    避免使用with(with会创建自己的作用域，会增加作用域链长度)

    多个变量声明合并

    避免图片和iFrame等的空Src。空Src会重新加载当前页面，影响速度和效率

    尽量避免写在HTML标签中写Style属性
```


#### 移动端性能优化

```css
    尽量使用css3动画，开启硬件加速。

    适当使用 touch 事件代替 click 事件。
    
    避免使用 css3 渐变阴影效果。
    
    可以用 transform: translateZ(0) 来开启硬件加速。
    
    不滥用Float。Float在渲染时计算量比较大，尽量减少使用
    
    不滥用Web字体。Web字体需要下载，解析，重绘当前页面，尽量减少使用。
    
    合理使用requestAnimationFrame动画代替setTimeout
    
    CSS中的属性（CSS3 transitions、CSS3 3D transforms、Opacity、Canvas、WebGL、Video）会触发GPU渲染，请合理使用。过渡使用会引发手机过耗电增加
    PC端的在移动端同样适用
```


> 相关阅读：[如何做到一秒渲染一个移动页面](https://github.com/cssmagic/blog/issues/20)

> 相关阅读：[对Tower网站浅显的性能分析](https://github.com/ccforward/cc/blob/master/Tower_Performance/README.md)







##### Final

> 不断更新中…… 如果发现问题欢迎在 [issues](https://github.com/Aierui/web-develope-questions/issues) 中指出。如果有比较好的问题/知识点/指正，也欢迎提 PR。

