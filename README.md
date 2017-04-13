# web-questions


## HTML/CSS


> `display:none`和`visibility:hidden`的区别？

```css
    display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。

    visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。
```

> CSS控制文字，超出部分显示省略号

```css
    overflow: hidden; 
    text-overflow:ellipsis; 
    white-space: nowrap;

    /*上面仅支持单行文本,多行呢？*/

    display: -webkit-box; 
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 3; 
    overflow: hidden;

    使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；
```


> CSS实现三角形图标的原理

```css
    .caret {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 2px;
      vertical-align: middle;
      border-top: 4px solid;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
    }

    首先，需要把元素的宽度、高度设为0,然后设置边框样式。

    要做倒立三角形、向右的、或者向左的三角形，只需要为三角形底部设置边框，两腰边框透明即可。

```


> 渐进增强和优雅降级

    渐进增强 ：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、

              交互等改进和追加功能达到更好的用户体验。

    优雅降级 ：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。



> CSS中` link` 和`@import `的区别是？

```css
    1.link属于HTML标签，而@import是CSS提供的;

    2.页面被加载的时，link会同时被加载，而@import被引用的CSS会等到引用它的CSS文件被加载完再加载;

    3.import只在IE5以上才能识别，而link是HTML标签，无兼容问题;

    4.link方式的样式的权重 高于@import的权重.
```


> `position:absolute`和`float`属性的异同

```css
	共同点：对内联元素设置`float`和`absolute`属性，可以让元素脱离文档流，并且可以设置其宽高。

	不同点：`float`仍会占据位置，`absolute`会覆盖文档流中的其他元素。
```


> 介绍一下box-sizing属性？

```css
	 
  box-sizing 属性主要用来控制元素的盒模型的解析模式。默认值是 content-box 。

        标准浏览器下，按照W3C规范对盒模型解析，一旦修改了元素的边框或内距，就会影响元素的盒子尺寸，
      
        就不得不重新计算元素的盒子尺寸，从而影响整个页面的布局。

	 
  content-box ：让元素维持W3C的标准盒模型。元素的宽度/高度由 border + padding + content 的宽度/高度决定，

        设置  width/height 属性指的是 content 部分的宽/高

	 
  border-box ：让元素维持IE传统盒模型（IE6以下版本和IE6~7的怪异模式）。

        设置 width/height 属性指的是 border + padding + content 
```
	

> CSS3中新增了一种盒模型计算方式：`box-sizing`。盒模型默认的值是`content-box`, 新增的值是`padding-box`和`border-box`，几种盒模型计算元素宽高的区别如下：

#### `content-box（默认）`

布局所占宽度Width：

```css
Width = width + padding-left + padding-right + border-left + border-right

```

布局所占高度Height:

```css
Height = height + padding-top + padding-bottom + border-top + border-bottom

```
#### `padding-box`

布局所占宽度Width：

```css
Width = width(包含padding-left + padding-right) + border-top + border-bottom

```

布局所占高度Height:

```css
Height = height(包含padding-top + padding-bottom) + border-top + border-bottom


```

#### `border-box`

布局所占宽度Width：

```css
Width = width(包含padding-left + padding-right + border-left + border-right)
```

布局所占高度Height:

```css
Height = height(包含padding-top + padding-bottom + border-top + border-bottom)
```



> CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？

```css
    1.id选择器（ # myid）

    2.类选择器（.myclassname）

    3.标签选择器（div, h1, p）

    4.相邻选择器（h1 + p）

    5.子选择器（ul > li）

    6.后代选择器（li a）

    7.通配符选择器（ * ）

    8.属性选择器（a[rel = "external"]）

    9.伪类选择器（a: hover, li:nth-child）

```



> **优先级为:**

```css
	!important >  id > class > tag 

	important 比 内联优先级高,但内联比 id 要高

```


> CSS3新增伪类举例：

```css
    p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。

    p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。

    p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。

    p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。

    p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。

    :enabled  :disabled 控制表单控件的禁用状态。

    :checked        单选框或复选框被选中。
```



> CSS3有哪些新特性？

```css
    CSS3实现圆角（border-radius），阴影（box-shadow），

    对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）

    transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜

    增加了更多的CSS选择器  多背景 rgba

    在CSS3中唯一引入的伪元素是::selection.

    媒体查询，多栏布局

    border-image
```


> 对BFC规范的理解？

```css
    BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。

    在同一个BFC中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的margin会发生折叠。

    W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用。
```


> 说说你对语义化的理解？

```
    1.去掉或者丢失样式的时候能够让页面呈现出清晰的结构

    2.有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；

    3.方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；

    4.便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
```


> Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?

```html
    1.<!DOCTYPE> 声明位于文档中的最前面，处于 <html> 标签之前。告知浏览器以何种模式来渲染文档。

    2.严格模式的排版和 JS 运作模式是  以该浏览器支持的最高标准运行。

    3.在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。

    4.<!DOCTYPE> 不存在或格式不正确会导致文档以混杂模式呈现。
```


> 你知道多少种`Doctype`文档类型？

```
   该标签可声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。

   HTML 4.01 规定了三种文档类型：Strict、Transitional 以及 Frameset。

   XHTML 1.0 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。

   Standards （标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页，而 Quirks

   （包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。
```



> HTML与XHTML——二者有什么区别

```
    区别：

    1.所有的标记都必须要有一个相应的结束标记

    2.所有标签的元素和属性的名字都必须使用小写

    3.所有的XML标记都必须合理嵌套

    4.所有的属性必须用引号""括起来

    5.把所有<和&特殊符号用编码表示

    6.给所有属性赋一个值

    7.不要在注释内容中使“--”

    8.图片必须有说明文字

```


> 常见兼容性问题？

```css
    png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.也可以引用一段脚本处理.

    浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。

    IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。

    浮动ie产生的双倍距离（IE6双边距问题：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。）

    #box{ float:left; width:10px; margin:0 0 0 100px;}

    这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入
    _display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)

    渐进识别的方式，从总体中逐渐排除局部。


      首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。

      接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

     
          .bb{

           background-color:#f1ee18;/*所有识别*/

          .background-color:#00deff\9; /*IE6、7、8识别*/

          +background-color:#a200ff;/*IE6、7识别*/

          _background-color:#1e0bd1;/*IE6识别*/

          }
```

```html
    怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发
    怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。现在
    可以使用[html5](http://www.w3.org/TR/html5/single-page.html)推荐的写法：<doctype html>
```


> 上下margin重合问题

```css
    IE和FF都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生塌陷，

        塌陷的最终尺寸是两个值中较大的一个。

    解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。

        当然，还可以将两个元素设置display: inline-block;或者浮动

        发生塌陷的不只是兄弟元素，父子关系也会发生，当父元素没有设定padding-top或border-top时（等于0），

        子元素的margin-top会和父元素的margin-top合并，与兄弟元素一样，margin最终会取值较大的作用于父元素，子元素会紧贴父元素上边界。
```



#### position的值， relative和absolute分别是相对于谁进行定位的？


- `absolute` :生成绝对定位的元素， 相对于最近一级的 定位不是 static 的父元素来进行定位。

- `fixed` （老IE不支持）生成绝对定位的元素，通常相对于浏览器窗口或 frame 进行定位。

- `relative` 生成相对定位的元素，相对于其在普通流中的位置进行定位。

- `static`  默认值。没有定位，元素出现在正常的流中

- `sticky` 生成粘性定位的元素，容器的位置根据正常文档流计算得出



#### 浮动元素引起的问题和解决办法？


> 解释下浮动和它的工作原理？清除浮动的技巧



    浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。


    1.使用空标签清除浮动。

       这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。

    2.使用overflow。

       给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。

    3.使用after伪对象清除浮动。

       该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素；




> 浮动元素引起的问题：

    1.父元素的高度无法被撑开，影响与父元素同级的元素

    2.与浮动元素同级的非浮动元素（内联元素）会跟随其后

    3.若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构


> 清除浮动的几种方法：


```css
    1.额外标签法，<div style="clear:both;"></div>（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。）

    2.使用after伪类

    #parent:after{

        content:".";

        height:0;

        visibility:hidden;

        display:block;

        clear:both;

        }


    3.浮动外部元素

    4.设置overflow为hidden或者auto
```



#### DOM操作——怎样添加、移除、移动、复制、创建和查找节点。


>1）创建新节点

          createDocumentFragment()    //创建一个DOM片段

          createElement()   //创建一个具体的元素

          createTextNode()   //创建一个文本节点


>2）添加、移除、替换、插入

          appendChild()

          removeChild()

          replaceChild()

          insertBefore() //并没有insertAfter()



>3）查找

          getElementsByTagName()    //通过标签名称

          getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)

          getElementById()    //通过元素Id，唯一性



#### HTML5 有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？


      HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

      拖拽释放(Drag and drop) API

      语义化更好的内容标签（header,nav,footer,aside,article,section）

      音频、视频API(audio,video)

      画布(Canvas) API

      地理(Geolocation) API

      本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；

      sessionStorage 的数据在浏览器关闭后自动删除


      表单控件，calendar、date、time、email、url、search

      新的技术webworker, websocket, Geolocation
      


> 移除的元素


    纯表现的元素：basefont，big，center，font, s，strike，tt，u；

    对可用性产生负面影响的元素：frame，frameset，noframes；


> 支持HTML5新标签：


```html
    IE8/IE7/IE6支持通过document.createElement方法产生的标签，

    可以利用这一特性让这些浏览器支持HTML5新标签，

    当然最好的方式是直接使用成熟的框架、使用最多的是html5shim框架

       <!--[if lt IE 9]>

       <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>

       <![endif]-->

    如何区分： DOCTYPE声明\新增的结构元素\功能元素
```




> 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？


```html
    
    FOUC - Flash Of Unstyled Content 文档样式闪烁

    <style type="text/css" media="all">@import "../fouc.css";</style>

      引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，

      因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。

      解决方法简单的出奇，只要在<head>之间加入一个<link>或者<script>元素就可以了。
```



#### Web Worker 、Web Socket 、Web Storage

> worker主线程:


```js
    1.通过 worker = new Worker( url ) 加载一个JS文件来创建一个worker，同时返回一个worker实例。

    2.通过worker.postMessage( data ) 方法来向worker发送数据。

    3.绑定worker.onmessage方法来接收worker发送过来的数据。

    4.可以使用 worker.terminate() 来终止一个worker的执行。
```


> Web Socket

```
  Web Socket 是 Web 应用程序的传输协议，它提供了双向的，按序到达的数据流。

  他是一个`HTML5`协议， WebSocket 的连接是持久的，他通过在客户端和服务器之间保持双工连接，

  服务器的更新可以被及时推送给客户端，而不需要客户端以一定时间间隔去轮询。
```

> Web Storage

```
  Web Storage 是HTML5引入的一个非常重要的功能，可以在客户端本地存储数据。

  类似HTML4的cookie，但可实现功能要比cookie强大的多，cookie大小被限制在4KB，Web Storage官方建议为每个网站5MB。

  Web Storage又分为两种：sessionStorage、localStorage
```


> 浏览器本地存储

```js
  在较高版本的浏览器中，js 提供了 sessionStorage 和 globalStorage 。在 HTML5 中提供了 localStorage 来取代 globalStorage 。

  HTML5 中的 Web Storage 包括了两种存储方式： sessionStorage 和 localStorage 。

  sessionStorage 用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。

  因此 sessionStorage 不是一种持久化的本地存储，仅仅是会话级别的存储。

  而 localStorage 用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

```

> 如何实现浏览器内多个标签页之间的通信?


```css
    调用localstorge、cookies等本地存储方式
```

> web storage和cookie的区别

```
  1、Web Storage 的概念和 cookie 相似，区别是它是为了更大容量存储设计的。 

  2、Cookie 的大小是受限的，并且每次你请求一个新的页面的时候 Cookie 都会被发送过去，
    
    这样无形中浪费了带宽，另外`cookie`还需要指定作用域，不可以跨域调用。

  3、除此之外，Web Storage 拥有 setItem,getItem,removeItem,clear 等方法，
    
    不像 cookie 需要前端开发者自己封装 setCookie，getCookie 。

  4、但是 cookie 也是不可以或缺的： cookie 的作用是与服务器进行交互，作为 
    
    HTTP 规范的一部分而存在 ，而 Web Storage 仅仅是为了在本地“存储”数据而生
    
    浏览器的支持除了`IE７`及以下不支持外，其他标准浏览器都完全支持(ie及FF需在

    web服务器里运行)，值得一提的是IE总是办好事，

  例如IE7、IE6中的 userData 其实就是 javascript 本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持 web storage 。

  localStorage 和 sessionStorage 都具有相同的操作方法，例 setItem、getItem 和 removeItem 等

```


> cookie 和session 的区别：

```
     1、cookie数据存放在客户的浏览器上，session数据放在服务器上。

     2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗

        考虑到安全应当使用session。

     3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能

         考虑到减轻服务器性能方面，应当使用COOKIE。

     4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

     5、所以个人建议：

        将登陆信息等重要信息存放为SESSION

        其他信息如果需要保留，可以放在COOKIE中
```


#### 请你谈谈Cookie的弊端


`cookie`虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。


```
    1.IE6或更低版本最多20个cookie

    2.IE7和之后的版本最后可以有50个cookie。

    3.Firefox最多50个cookie

    4.chrome和Safari没有做硬性限制
```


`IE`和`Opera` 会清理近期最少使用的`cookie`，`Firefox`会随机清理`cookie`。


`cookie`的最大大约为`4096`字节，为了兼容性，一般不能超过`4095`字节。


IE 提供了一种存储可以持久化用户数据，叫做`userdata`，从`IE5.0`就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。



> 优点：极高的扩展性和可用性

    1.通过良好的编程，控制保存在cookie中的session对象的大小。

    2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。

    3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。

    4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。


> 缺点：

    1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉.

    2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。

    3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。










## JavaScript



#### null和undefined的区别？变量赋值、内存泄露、端事件差异区别


> null 是一个表示"无"的对象，转为数值时为0； undefined 是一个表示"无"的原始值，转为数值时为 NaN 。

    当声明的变量还未被初始化时，变量的默认值为 undefined 。

    null 用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。



    undefined 表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

      1.变量被声明了，但没有赋值时，就等于undefined。

      2.调用函数时，应该提供的参数没有提供，该参数等于undefined。

      3.对象没有赋值的属性，该属性的值为undefined。

      4.函数没有返回值时，默认返回undefined。



    null 表示"没有对象"，即该处不应该有值。典型用法是：

      1.作为函数的参数，表示该函数的参数不是对象。

      2.作为对象原型链的终点。




> new操作符具体干了什么呢?

```js
   1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。

   2、属性和方法被加入到 this 引用的对象中。

   3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。


    var obj  = {};

    obj.__proto__ = Base.prototype;

    Base.call(obj);
```


> js延迟加载的方式有哪些？

    defer和async、动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack）、按需异步载入js



> `call()` 和 `apply()` 的区别和作用？

```js
  作用：动态改变某个类的某个方法的运行环境（执行上下文）。

  apply()函数有两个参数：第一个参数是上下文，第二个参数是参数组成的数组。如果上下文是null，则使用全局对象代替。例如：

  function.apply(this,[1,2,3])

  call()的第一个参数是上下文，后续是实例传入的参数序列，例如：

  function.call(this,1,2,3);

```


> Scope作用范围

```js
    (function() {
       var a = b = 5;
    })();

    console.log(b);//5

    这里有两个变量声明，但 a 使用关键字var声明的。代表它是一个函数的局部变量。

    与此相反，b 变成了全局变量。

    这个问题的另一个诀窍是，它没有使用严格模式 ('use strict';) 。如果启用了严格模式，

    代码就会引发ReferenceError的错误：B没有定义（b is not defined）。

    请记住，严格模式，则需要明确指定，才能实现全局变量声明。比如，你应该写：


    (function() {
       'use strict';
       var a = window.b = 5;
    })();

    console.log(b);//
```

> 声明提升（Hoisting）

```js
    function test() {
       console.log(a);
       console.log(foo());
       var a = 1;
       function foo() {
          return 2;
       }
    }

    test();

    //结果是 undefined 和 2

    //原因是，变量和函数的声明都被提前了（移到了函数的顶部），但变量不分配任何值。

    //因此，在打印变量的时候，它在函数中存在（它被声明了），但它仍然是 undefined
```

> 哪些操作会造成内存泄漏？

```
    内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。

    垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 

    0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

    setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。

    闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
```





> JavaScript中的PC端点击事件和移动端点击事件的差异性和原理：

```
  在手持设备的浏览器上（此处主要指定IOS和Android系统上的Webkit内核的浏览器和嵌入在应用程序里面的Webview），

  由于两次连续的“轻触”是放大的操作（即使你两次轻触的是一个链接或一个有click的时间监听的元素），所以在第一次被

  “轻触”后，浏览器需要先等一段时间，看看有没有所谓的“连续第二次轻触”。如果有，则进行“放大”操作。否则，才敢放心

  地认为用户不是要放大，而是需要“click”，至此才敢触发click事件，导致“短按”（手指接触屏幕到离开屏幕的时间比较短）

  的click时间通常大约会延迟300ms。
  
  在移动平台浏览器中事件的触发顺序，是 touchstart-touchmove-touchend-click
```


#### 列举IE 与其他浏览器不一样的特性？

- IE支持`currentStyle`，FIrefox使用`getComputStyle`

- IE  使用`innerText`，Firefox使用`textContent`

- 滤镜方面：IE:`filter:alpha(opacity= num)`；Firefox：`-moz-opacity:num`

- 事件方面：IE：`attachEvent`：火狐是`addEventListener`

- 鼠标位置：IE是`event.clientX`；火狐是`event.pageX`

- IE使用`event.srcElement`；Firefox使用`event.target`

- IE中消除list的原点仅需margin:0即可达到最终效果；FIrefox需要设置`margin:0;padding:0以及list-style:none`

- CSS圆角：ie7以下不支持圆角



#### 说说你对Promise的理解



> 依照 `Promise` 的定义，`Promise` 有三种状态：

    异步操作“未完成”（pending）
    
    异步操作“已完成”（resolved，又称fulfilled）
    
    异步操作“失败”（rejected）


> 这三种的状态的变化途径只有两种。

    异步操作从“未完成”到“已完成”
    
    异步操作从“未完成”到“失败”。


> 另外， `fulfilled` 与 `rejected` 一起合称 `settled`。

> `Promise` 对象用来进行延迟(deferred) 和异步(asynchronous ) 计算。

> Promise 的构造函数，最基本的用法如下：


```js
  var promise = new Promise(function(resolve, reject) {

      if (...) {  // succeed

          resolve(result);

      } else {   // fails

          reject(Error(errMessage));

      }
  });
```


> `Promise` 实例拥有 `then` 方法（具有 `then` 方法的对象，通常被称为 `thenable`）。它的使用方法如下：

```js
  promise.then(onFulfilled, onRejected)
  
  //接收两个函数作为参数，一个在 `fulfilled` 的时候被调用，一个在 `rejected` 的时候被调用，
  //接收参数就是 `future，onFulfilled` 对应 `resolve`, `onRejected` 对应 `reject`。
  //then方法可以链式使用

```



#### 实现一个函数clone，可以对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制


```js
    Object.prototype.clone = function(){

            var o = this.constructor === Array ? [] : {};

            for(var e in this){

                    o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];

            }

            return o;
    }
```

#### JavaScript中快速排序、去重


> 快速排序
```js
    //排序过程只需要三步：

    //　1.在数据集之中，找一个基准点

　　//  2.建立两个数组，分别存储左边和右边的数组

　　//  3.利用递归进行下次比较

    function quickSort(arr){
       if(arr.length <= 1) return arr;  //如果数组只有一个数，就直接返回；

       var index = Math.floor(arr.length/2);  //找到中间数的索引值，如果是浮点数，则向下取整

       var key = arr.splice(index,1)[0];  //找到中间数的值
       
       var left = [],right = [];
       
       arr.forEach(function(v){
           v <= key ? left.push(v) : right.push(v); //基准点的左边的数传到左边数组、右边的数传到右边数组
       });
       
       return quickSort(left).concat([key],quickSort(right)); //递归不断重复比较
    }
```



> 去重、基本数组去重

```js
    Array.prototype.unique = function(){
        var result = [];
        
        this.forEach(function(v){
            if(result.indexOf(v) < 0){
                result.push(v);
            }
        });

        return result;
    }
```


> 去重、利用hash表去重，这是一种空间换时间的方法

```js
    Array.prototype.unique = function(){
        var result = [],hash = {};
        
        this.forEach(function(v){
            if(!hash[v]){
                hash[v] = true;
                result.push(v);
            }
        });
        
        return result;
    }
```


> 上面的方法存在一个bug，对于数组[1,2,’1’,’2’,3]，去重结果为[1,2,3]，原因在于对象对属性索引时会进行强制类型转换，arr[‘1’]和arr[1]得到的都是arr[1]的值，因此需做一些改变：

```js
    Array.prototype.unique = function(){
        var result = [],hash = {};
        
        this.forEach(function(v){
            var type = typeof(v);  //获取元素类型
            
            hash[v] || (hash[v] = new Array());
            
            if(hash[v].indexOf(type) < 0){
                hash[v].push(type);  //存储类型
                result.push(v);
            }
            
        });
        
        return result;
    }

```



>


#### 说说严格模式的限制



> 严格模式主要有以下限制：

```
    变量必须声明后再使用

    函数的参数不能有同名属性，否则报错

    不能使用with语句

    不能对只读属性赋值，否则报错

    不能使用前缀0表示八进制数，否则报错

    不能删除不可删除的属性，否则报错

    不能删除变量delete prop，会报错，只能删除属性delete global[prop]

    eval不会在它的外层作用域引入变量

    eval和arguments不能被重新赋值

    arguments不会自动反映函数参数的变化

    不能使用arguments.callee

    不能使用arguments.caller

    禁止this指向全局对象

    不能使用fn.caller和fn.arguments获取函数调用的堆栈

    增加了保留字（比如protected、static和interface）
```


> 设立"严格模式"的目的，主要有以下几个：

```
    1.消除`Javascript`语法的一些不合理、不严谨之处，减少一些怪异行为;

    2.消除代码运行的一些不安全之处，保证代码运行的安全；

    3.提高编译器效率，增加运行速度；

    4.为未来新版本的`Javascript`做好铺垫。
```


**注：** 经过测试`IE6,7,8,9`均不支持严格模式。



#### 如何删除一个cookie



> 1.将时间设为当前时间往前一点。


```js
  var date = new Date();

  date.setDate(date.getDate() - 1);//真正的删除 setDate() 方法用于设置一个月的某一天。
```


> 2.expires的设置

```js
  document.cookie = 'user='+ encodeURIComponent('name')  + ';expires = ' + new Date(0)
```


#### document.write()的用法

```js
  document.write() 方法可以用在两个方面：页面载入过程中用实时脚本创建页面内容，以及用延时脚本创建本窗口或新窗口的内容。

  document.write 只能重绘整个页面。 innerHTML 可以重绘页面的一部分
```

#### 编写一个方法 求一个字符串的字节长度

假设：一个英文字符占用一个字节，一个中文字符占用两个字节

```js
 function GetBytes(str){

        var len = str.length;

        var bytes = len;

        for(var i=0; i<len; i++){

            if (str.charCodeAt(i) > 255) bytes++;

        }

        return bytes;

    }

alert(GetBytes("你好,as"));
```



#### javascript对象的几种创建方式

    1，工厂模式

    2，构造函数模式

    3，原型模式

    4，混合构造函数和原型模式

    5，动态原型模式

    6，寄生构造函数模式

    7，稳妥构造函数模式



#### javascript继承的6种方法

    1，原型链继承

    2，借用构造函数继承

    3，组合继承(原型+借用构造)

    4，原型式继承

    5，寄生式继承

    6，寄生组合式继承



详情：[ECMAScript面向对象的程序设计](https://github.com/Aierui/jstraining/blob/master/node/Object-Oriented.md)



#### 用过哪些设计模式？



>工厂模式：

    主要好处就是可以消除对象间的耦合，通过使用工程方法而不是new关键字。将所有实例化的代码集中在一个位置防止代码重复。

        工厂模式解决了重复实例化的问题 ，但还有一个问题,那就是识别问题，因为根本无法 搞清楚他们到底是哪个对象的实例。


    function createObject(name,age,profession){//集中实例化的函数var obj = new Object();
        obj.name = name;
        obj.age = age;
        obj.profession = profession;
        obj.move = function () {
            return this.name + ' at ' + this.age + ' engaged in ' + this.profession;
        };
        return obj;
    }
    var test1 = createObject('trigkit4',22,'programmer');//第一个实例

    var test2 = createObject('mike',25,'engineer');//第二个实例


<br>



>构造函数模式


使用构造函数的方法 ，即解决了重复实例化的问题 ，又解决了对象识别的问题，该模式与工厂模式的不同之处在于：



    1.构造函数方法没有显示的创建对象 (new Object());

    2.直接将属性和方法赋值给 this 对象;

    3.没有 renturn 语句。





#### js继承方式及其优缺点



>原型链继承的缺点


    一是字面量重写原型会中断关系，使用引用类型的原型，并且子类型还无法给超类型传递参数。


>借用构造函数（类式继承）



    借用构造函数虽然解决了刚才两种问题，但没有原型，则复用无从谈起。所以我们需要原型链+借用构造函数的模式，这种模式称为组合继承



>组合式继承



    组合式继承是比较常用的一种继承方法，其背后的思路是 使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又保证每个实例都有它自己的属性。

具体请看：[JavaScript继承方式详解](http://segmentfault.com/a/1190000002440502)




#### 说说你对作用域链的理解


    javascript 语言特性中，有很多方面和我们接触的其他编程语言不太一样，比如说，

    javascript语言实现继承机制的核心就是 原型，而不是Java语言那样的 类式 继承。

    Javascript 解析引擎在读取一个Object的属性的值时，会沿着 原型链 向上寻找，

    如果最终没有找到，则该属性值为 undefined ； 

    如果最终找到该属性的值，则返回结果。

    与这个过程不同的是，当javascript解析引擎执行“给一个Object的某个属性赋值”的时候，如果当前Object存在该属性，


    则改写该属性的值，如果当前的Object本身并不存在该属性，则赋值该属性的值 。

    作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，

    变量访问到 window 对象即被终止，作用域链向下访问变量是不被允许的。



#### 说说你对闭包的理解



使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。在js中，函数即闭包，只有函数才会产生作用域的概念


闭包有三个特性：

>1.函数嵌套函数

>2.函数内部可以引用外部的参数和变量

>3.参数和变量不会被垃圾回收机制回收


 具体请看：[详解js闭包](http://segmentfault.com/a/1190000000652891)







#### ajax的缺点和在IE下的问题？


> ajax的缺点

    1、ajax不支持浏览器back按钮。

    2、安全问题 AJAX暴露了与服务器交互的细节。

    3、对搜索引擎的支持比较弱。

    4、破坏了程序的异常机制。

    5、不容易调试。


> IE缓存问题

在IE浏览器下，如果请求的方法是`GET`，并且请求的`URL`不变，那么这个请求的结果就会被缓存。解决这个问题的办法可以通过实时改变请求的`URL`，只要URL改变，就不会被缓存，可以通过在URL末尾添加上随机的时间戳参数(`'t'= + new Date().getTime()`)



或者：


```
open('GET','demo.php?rand=+Math.random()',true);//
```


>Ajax请求的页面历史记录状态问题

可以通过锚点来记录状态，`location.hash`。让浏览器记录Ajax请求时页面状态的变化。



还可以通过`HTML5`的`history.pushState`，来实现浏览器地址栏的无刷新改变


#### 创建ajax的过程

```js
    (1)创建`XMLHttpRequest`对象,也就是创建一个异步调用对象.

    (2)创建一个新的`HTTP`请求,并指定该`HTTP`请求的方法、`URL`及验证信息.

    (3)设置响应`HTTP`请求状态变化的函数.

    (4)发送`HTTP`请求.

    (5)获取异步调用返回的数据.

    (6)使用JavaScript和DOM实现局部刷新.


    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET','demo.php','true');

    xmlHttp.send()

    xmlHttp.onreadystatechange = function(){

        if(xmlHttp.readyState === 4 & xmlHttp.status === 200){

        }

    }
```


详情：[JavaScript学习总结（七）Ajax和Http状态字](http://segmentfault.com/blog/trigkit4/1190000000691919)



#### 异步加载和延迟加载

    1.异步加载的方案： 动态插入script标签

    2.通过ajax去获取js代码，然后通过eval执行

    3.script标签上添加defer或者async属性

    4.创建并插入iframe，让它异步执行js

    5.延迟加载：有些 js 代码并不是页面初始化的时候就立刻需要的，而稍后的某些情况才需要的。



#### ie各版本和chrome可以并行下载多少个资源


    IE6 两个并发，iE7升级之后的6个并发，之后版本也是6个
    Firefox，chrome也是6个



####`Flash`、`Ajax`各自的优缺点，在使用中如何取舍？

- `Flash`适合处理多媒体、矢量图形、访问机器；对`CSS`、处理文本上不足，不容易被搜索。

-` Ajax`对`CSS`、文本支持很好，支持搜索；多媒体、矢量图形、机器访问不足。

- 共同点：与服务器的无刷新传递消息、用户离线和在线状态、操作DOM



#### 请解释一下 JavaScript 的同源策略。


概念:同源策略是客户端脚本（尤其是`Javascript`）的重要的安全度量标准。它最早出自`Netscape Navigator2.0`，其目的是防止某个文档或脚本从多个不同源装载。


这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议。

指一段脚本只能读取来自同一来源的窗口和文档的属性。



#### 为什么要有同源限制？

   我们举例说明：比如一个黑客程序，他利用`Iframe`把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名，密码登录时，他的页面就可以通过`Javascript`读取到你的表单中`input`中的内容，这样用户名，密码就轻松到手了。


缺点：

现在网站的`JS` 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 `merge` 后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。




#### WEB应用从服务器主动推送Data到客户端有那些方式？



Javascript数据推送

- `Commet`：基于HTTP长连接的服务器推送技术


- 基于`WebSocket`的推送方案


- `SSE`（Server-Send Event）：服务器推送数据新方式


#### 如何评价AngularJS和BackboneJS

`backbone`具有依赖性，依赖`underscore.js`。`Backbone + Underscore + jQuery(or Zepto)` 就比一个`AngularJS` 多出了2 次HTTP请求.

<br>

`Backbone`的`Model`没有与UI视图数据绑定，而是需要在View中自行操作DOM来更新或读取UI数据。`AngularJS`与此相反，Model直接与UI视图绑定，`Model`与UI视图的关系，通过`directive`封装，`AngularJS`内置的通用`directive`，就能实现大部分操作了，也就是说，基本不必关心`Model`与UI视图的关系，直接操作Model就行了，UI视图自动更新。

<br>

`AngularJS`的`directive`，你输入特定数据，他就能输出相应UI视图。是一个比较完善的前端MVW框架，包含模板，数据双向绑定，路由，模块化，服务，依赖注入等所有功能，模板功能强大丰富，并且是声明式的，自带了丰富的 Angular 指令。



#### 你觉得jQuery或zepto源码有哪些写的好的地方

(答案仅供参考)

`jquery`源码封装在一个匿名函数的自执行环境中，有助于防止变量的全局污染，然后通过传入window对象参数，可以使window对象作为局部变量使用，好处是当`jquery`中访问window对象的时候，就不用将作用域链退回到顶层作用域了，从而可以更快的访问`window`对象。同样，传入`undefined`参数，可以缩短查找undefined时的作用域链。




```js
    (function( window, undefined ) {

         //用一个函数域包起来，就是所谓的沙箱

         //在这里边var定义的变量，属于这个函数域内的局部变量，避免污染全局

         //把当前沙箱需要的外部变量通过函数参数引入进来

         //只要保证参数对内提供的接口的一致性，你还可以随意替换传进来的这个参数

        window.jQuery = window.$ = jQuery;

    })( window );
```


jquery将一些原型属性和方法封装在了`jquery.prototype`中，为了缩短名称，又赋值给了`jquery.fn`，这是很形象的写法。



有一些数组或对象的方法经常能使用到，jQuery将其保存为局部变量以提高访问速度。




`jquery`实现的链式调用可以节约代码，所返回的都是同一个对象，可以提高代码效率。



#### ES6的了解

新增模板字符串（为JavaScript提供了简单的字符串插值功能）、箭头函数（操作符左边为输入的参数，而右边则是进行的操作以及返回的值`Inputs=>outputs`。）、`for-of`（用来遍历数据—例如数组中的值。）`arguments`对象可被不定参数和默认参数完美代替。`ES6`将`promise`对象纳入规范，提供了原生的`Promise`对象。增加了`let`和`const`命令，用来声明变量。增加了块级作用域。let命令实际上就增加了块级作用域。ES6规定，`var`命令和`function`命令声明的全局变量，属于全局对象的属性；`let`命令、`const`命令、`class`命令声明的全局变量，不属于全局对象的属性。。还有就是引入`module`模块的概念




#### `XML`和`JSON`的区别？

```html
(1).数据体积方面。

JSON相对于XML来讲，数据的体积小，传递的速度更快些。

(2).数据交互方面。

JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互。

(3).数据描述方面。

JSON对数据的描述性比XML较差。

(4).传输速度方面。

JSON的速度要远远快于XML。
```


#### 谈谈你对webpack的看法



`WebPack` 是一个模块打包工具，你可以使用`WebPack`管理你的模块依赖，并编绎输出模块们所需的静态文件。它能够很好地管理、打包Web开发中所用到的`HTML、Javascript、CSS`以及各种静态文件（图片、字体等），让开发过程更加高效。对于不同类型的资源，`webpack`有对应的模块加载器。`webpack`模块打包器会分析模块间的依赖关系，最后 生成了优化且合并后的静态资源。


`webpack`的两大特色：

    1.code splitting（可以自动完成）

    2.loader 可以处理各种类型的静态文件，并且支持串联操作


`webpack` 是以` commonJS `的形式来书写脚本滴，但对 `AMD/CMD` 的支持也很全面，方便旧项目进行代码迁移。

`webpack`具有`requireJs`和`browserify`的功能，但仍有很多自己的新特性：


```
1. 对 CommonJS 、 AMD 、ES6的语法做了兼容

2. 对js、css、图片等资源文件都支持打包

3. 串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性，例如提供对CoffeeScript、ES6的支持

4. 有独立的配置文件webpack.config.js

5. 可以将代码切割成不同的chunk，实现按需加载，降低了初始化时间

6. 支持 SourceUrls 和 SourceMaps，易于调试

7. 具有强大的Plugin接口，大多是内部插件，使用起来比较灵活

8.webpack 使用异步 IO 并具有多级缓存。这使得 webpack 很快且在增量编译上更加快
```


## 网络







