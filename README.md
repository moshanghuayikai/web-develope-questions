# web-questions


## HTML/CSS


> `display:none`和`visibility:hidden`的区别？

```css
    display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。

    visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。
```


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

```
	`box-sizing`属性主要用来控制元素的盒模型的解析模式。默认值是`content-box`。
  
  标准浏览器下，按照W3C规范对盒模型解析，一旦修改了元素的边框或内距，就会影响元素的盒子尺寸，就不得不重新计算元素的盒子尺寸，从而影响整个页面的布局。

	`content-box`：让元素维持W3C的标准盒模型。元素的宽度/高度由`border + padding + content`的宽度/高度决定，设置`width/height`属性指的是`content`部分的宽/高

	`border-box`：让元素维持IE传统盒模型（IE6以下版本和IE6~7的怪异模式）。设置`width/height`属性指的是`border + padding + content`
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
    IE和FF都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。

    解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。
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


> 解决方法：

  使用`CSS`中的`clear:both`;属性来清除元素的浮动可解决2、3问题，对于问题1，添加如下样式，给父元素添加`clearfix`样式：

```css
    .clearfix:after{content: ".";display: block;height: 0;clear: both;visibility: hidden;}

    .clearfix{display: inline-block;} /* for IE/Mac */
```

**清除浮动的几种方法：**


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

          getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，
          会得到一个数组，其中包括id等于name值的)

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


> 如何实现浏览器内多个标签页之间的通信?


```css
    调用localstorge、cookies等本地存储方式
```

> 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？


```html
     FOUC - Flash Of Unstyled Content 文档样式闪烁

     <style type="text/css" media="all">@import "../fouc.css";</style>

    而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。

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

     1、cookie数据存放在客户的浏览器上，session数据放在服务器上。

     2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗

        考虑到安全应当使用session。

     3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能

         考虑到减轻服务器性能方面，应当使用COOKIE。

     4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

     5、所以个人建议：

        将登陆信息等重要信息存放为SESSION

        其他信息如果需要保留，可以放在COOKIE中



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


## 网络

