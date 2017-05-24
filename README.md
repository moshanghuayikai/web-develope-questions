# web-questions


> 总体来说，前端开发涉及如下技术：

> 不断更新中……


- [基础基础](#1)

    - [HTML/CSS](#1.1)


    - [JavaScript](#1.2)

    - [网络](#1.3)

- [编程能力](#2)

    - [数据结构和算法](#2.1)

    - [正则表达式](#2.2)

- [扩展技术](#3) 
    
    - [Node.js](#3.1)

    - [ES6](#3.2)

    - [前端框架](#3.3)

    - [数据可视化](#3.4)
    
    - [性能优化](#3.5)
    
    - [前端工程](#3.6)

- [Web](#4)
    
    - [Web安全](#4.1)

    - [综合](#4.2)




<h1 id="1">基础基础</h1>



<h2 id="1.1">HTML/CSS</h2>




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
    共同点：对内联元素设置 float 和 absolute 属性，可以让元素脱离文档流，并且可以设置其宽高。
    
    不同点： float 仍会占据位置， absolute 会覆盖文档流中的其他元素。
```


#### 如何将页脚固定在页面底部?


> 方法一：

  ```html
    <div id="container">

      <div id="header">Header Section</div>

      <div id="page" class="clearfix">

       页面容容部分

      </div>

      <div id="footer">Footer Section</div>

    </div>

    <!-- 实现这页脚永远固定在页面的底部，我们只需要四个div，其中div#container是一个容器，在这个容器之中，我们包含了div#header（头部），div#page（页面主体部分，我们可以在这个div中增加更多的div结构，如上面的代码所示），div#footer（页脚部分） -->

  ```
  ```css

    #container {
        min-height:100%;
        height: auto !important;
        height: 100%; /*IE6不识别min-height*/
        position: relative;
    }

    #page {
        width: 960px;
        margin: 0 auto;
        padding-bottom: 60px;/*等于footer的高度*/
    }

    #footer {
        position:absolute;
        bottom: 0;
        width: 100%;
        height: 60px;/*脚部的高度*/
        background: #6cf;
        clear:both;
    }

  ```


> 方法二：


> 方法三：


> 方法四：


####  如何实现元素水平居中、垂直居中、水平垂直居中？

> 水平居中

```css
  水平居中：行内元素

    如果被设置元素为文本、图片等行内元素时，水平居中是通过给父元素设置 text-align:center 来实现的
    .parent {
      text-align:center;
    }


  水平居中：定宽块状元素
  
    满足定宽和块状两个条件的元素是可以通过设置“左右margin”值为“auto”来实现居中的。
    .item{
      margin: 3rem auto;
    }


  水平居中：多个块状元素解决方案
  
    将元素的display属性设置为inline-block，并且把父元素的text-align属性设置为center即可:
    .parent {
      text-align:center;
    }
  

  水平居中：多个块状元素解决方案 (使用flexbox布局实现)

    使用flexbox布局，只需要把待处理的块状元素的父元素添加属性display:flex及justify-content:center即可:
    .parent {
      display:flex;
      justify-content:center;
    }
  

  水平居中：不定宽块状元素

    a.改变块级元素的 dispaly 为 inline 类型，然后使用 text-align:center 来实现居中效果

    b.通过给父元素设置 float，然后给父元素设置 position:relative 和 left:50%，子元素设置 position:relative 和 left:-50% 来实现水平居中

    c.如果这个标签是table等表格元素可以使用左右 margin 居中

```

> 垂直居中

```css
  父元素高度确定的单行文本

    垂直居中的方法是通过设置父元素的 height 和 line-height 高度一致来实现的

    竖直居中的属性 vertical-align，但这个样式只有在父元素为 td 或 th 时，才会生效 

    /* vertical-align 和 display: inline-block 在一起有讲究 */


  垂直居中：多行的行内元素解决方案
    组合使用display:table-cell和vertical-align:middle属性来定义需要居中的元素的父容器元素生成效果，如下：
    .parent {
      background: #222;
      width: 300px;
      height: 300px;
      
      /* 以下属性垂直居中 */
      display: table-cell;
      vertical-align:middle;
    }


  垂直居中：已知高度的块状元素解决方案
    .item{
        top: 50%;
        margin-top: -50px;  /* margin-top值为自身高度的一半 */
        position: absolute;
        padding:0;
    }

```


> 水平垂直居中

```css
  水平垂直居中：已知高度和宽度的元素解决方案
    这是一种不常见的居中方法，可自适应,如下：
    .item{
        position: absolute;
        margin:auto;
        left:0;
        top:0;
        right:0;
        bottom:0;
    }


  水平垂直居中：未知高度和宽度元素解决方案
    .item{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);  /* 使用css3的transform来实现 */
    }


  水平垂直居中：使用flex布局实现
    .parent{
        display: flex;
        justify-content:center;
        align-items: center;

        /* 注意这里需要设置高度来查看垂直居中效果 */
        background: #AAA;
        height: 300px;
    }

```

> 各个的浏览器前缀

```
  -webkit  chrome和safari

     -moz  firefox

      -ms  IE

       -o  opera
```



> 谈谈flex语法

```
  容器属性

    flex-direction
   
    flex-wrap
   
    flex-flow (flex-direction 和 flex-wrap的简写)
   
    justify-content
   
    align-items
   
    align-content


   项目属性

    order

    flex-grow

    flex-shrink

    flex-basis

    flex (flex-grow, flex-shrink 和 flex-basis的简写)

    align-self

```
详见：[阮一峰老师的Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)


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

> z-index的使用？

```css
  z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。

  z-index 属性仅在节点的 position 属性为 relative, absolute 或者 fixed 时生效.

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



> CSS中的单位px、em、rem、百分比、pt、in、cn、mm、

```css
    绝对长度单位：px、in(英寸)、cm、mm

      in：1in == 96px


    相对字体长度：em、rem、pt

      em：逐级向上相乘font-size的值，直到根(html)元素

      rem：只是相对根(html)元素

      pt：1pt == 1/72in == 


    百分比：基于具有相同属性的父元素的长度值


    可视区百分比长度单位：vw、vh

      vw：1vw等于可视区宽度的百分之一

      vh：1vw等于可视区高度的百分之一
```



> 说说你对语义化的理解？

```
    1.去掉或者丢失样式的时候能够让页面呈现出清晰的结构

    2.有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；

    3.方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；

    4.便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
```


> 前端开发规范手册(推荐)

详见：[前端开发规范手册](http://zhibimo.com/read/Ashu/front-end-style-guide/index.html)



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
    可以使用 HTML5 推荐的写法：<!DOCTYPE html>
```

> 兼容性问题无非就是不同浏览器内核/版本在实现标准时出现的差异，然后通过 新旧标准语法 / 私有属性 / polyfill / shim / hack 等方式去解决。如，如何兼容低版本手机，首先得定义低版本的手机是指哪些？然后再看具体使用的布局方式。比如现在最常见的 flex 布局，如果需要兼容 iOS7.0 及 Android4.0 以上，那么就是处理 flex 新旧标准的语法以及不同浏览器内核的私有属性，再加上部分 Android 定制内核的手机可能需要 case by case 处理。




#### position的值， relative和absolute分别是相对于谁进行定位的？


- `absolute` :生成绝对定位的元素， 相对于最近一级的 定位不是 static 的父元素来进行定位。

- `fixed` （老IE不支持 < IE11 ）生成绝对定位的元素，通常相对于浏览器窗口或 frame 进行定位。

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
    1.额外标签法，<div style="clear:both;"></div>/*（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。） */
    
    2.浮动父元素 /* 过多使用与Web精髓相违背 */

    3.设置overflow为hidden或者auto

    4.使用after伪类

    #parent:after{

        content:".";

        height:0;

        visibility:hidden;

        display:block;

        clear:both;

        }

      /* 优化为 ====> */

      .clearfix:after,
      .clearfix:before{
        content: " ";
        display: table;
      }

      .clearfix:after{
        clear: both;
      }
      /* 伪类before可以解决浏览器顶部空白部分，即上下margin重合问题  */

```




> 对BFC规范的理解？

```css
    BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。

    在同一个BFC中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的margin会发生折叠。

    W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用。
```



> 能够触发BFC的元素有？ 一般可以通过触发元素的 BFC 达到清除浮动的目的

```css
    float: left;
    overflow: auto;
    display: table;
    display: table-cell;
    display: table-caption;
    display: inline-block;
    position: fixed;
    position: absolute;
    ……
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



> padding 对于block、inline 水平元素

```css
    对于block块级元素

      padding值暴走，一定会影响尺寸


    对于inline水平元素

      水平padding影响尺寸，垂直padding不影响尺寸，但是会影响会背景色（占据空间）

```



#### DOM操作——怎样添加、移除、移动、复制、创建和查找节点。


> 创建新节点

          createDocumentFragment()    //创建一个DOM片段

          createElement()   //创建一个具体的元素

          createTextNode()   //创建一个文本节点


> 添加、移除、替换、插入

          appendChild()

          removeChild()

          replaceChild()

          insertBefore() //并没有insertAfter()



> 查找

          document.querySelector()，document.querySelectorAll() //返回匹配该选择器的元素节点 空则返回null 但是，它们不支持CSS伪元素的选择器

          document.getElementsByTagName()    //通过标签名称 返回值是一个类似数组的HTMLCollection对象

          document.getElementsByClassName()   //返回值是一个类似数组的HTMLCollection对象

          document.getElementsByName()   //返回一个类似数组的的对象（NodeList对象的实例）

          getElementById()    //返回匹配指定id属性的元素节点，空则返回null 

          document.elementFromPoint()    //方法返回位于页面指定位置最上层的Element子节点


> DOM模型中节点类型有？
          
          Document节点（document节点是文档的根节点，每张网页都有自己的document节点）

          Element节点（Element对象对应网页的HTML标签元素）

          Text节点（Text节点代表Element节点和Attribute节点的文本内容）

          DocumentFragment节点（代表一个文档的片段，本身就是一个完整的DOM树形结构）


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

> Web Worker 主线程:


```js
    1.通过 worker = new Worker( url ) 加载一个JS文件来创建一个worker，同时返回一个worker实例。

    2.通过worker.postMessage( data ) 方法来向worker发送数据。

    3.绑定worker.onmessage方法来接收worker发送过来的数据。

    4.可以使用 worker.terminate() 来终止一个worker的执行。
```


> Web Socket

```
  Web Socket 是 Web 应用程序的传输协议，它提供了双向的，按序到达的数据流。

  他是一个 HTML5 协议， WebSocket 的连接是持久的，他通过在客户端和服务器之间保持双工连接，

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
  在较高版本的浏览器中，js 提供了 sessionStorage 和 globalStorage 。

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



> 如何保证Session的安全？

```
  验证用户的使用环境[浏览器和 IP 地址]。 
      
      分配给用户 Session ID 时，同时探明用户使用的浏览器和 IP 地址，作为验证依据，使非法用户不能进行 Session ID 欺骗。 
  

  正确处理 Session 变量。 
      
      当用户注销时，立即删除 Session ID 。并设置好 Session 的生存周期，过期就自动删除。 


```



<h2 id="1.2">JavaScript</h2>


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


#### Javascript垃圾回收方法

> 标记清除（mark and sweep）

```
  这是JavaScript最常见的垃圾回收方式，当变量进入执行环境的时候，比如函数中声明一个变量，

  垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”。

  垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境中变量

  所引用的变量（闭包），在这些完成之后仍存在标记的就是要删除的变量了
```


> 引用计数(reference counting)

```
    在低版本IE中经常会出现内存泄露，很多时候就是因为其采用引用计数方式进行垃圾回收。

    引用计数的策略是跟踪记录每个值被使用的次数，当声明了一个 变量并将一个引用类型赋值

    给该变量的时候这个值的引用次数就加1，如果该变量的值变成了另外一个，则这个值得引用次数减1，

    当这个值的引用次数变为0的时 候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收，

    这样垃圾回收器会在运行的时候清理掉引用次数为0的值占用的空间。

```


```
在IE中虽然 JavaScript 对象通过标记清除的方式进行垃圾回收，

但BOM与DOM对象却是通过引用计数回收垃圾的，也就是说只要涉及`BOM`及DOM就会出现循环引用问题。
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
    1.消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;

    2.消除代码运行的一些不安全之处，保证代码运行的安全；

    3.提高编译器效率，增加运行速度；

    4.为未来新版本的 Javascript 做好铺垫。
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



#### javascript对象的几种创建方式、继承


> javascript对象的几种创建方式

```
    1.工厂模式

    2.构造函数模式

    3.原型模式

    4.混合构造函数和原型模式

    5.动态原型模式

    6.寄生构造函数模式

    7.稳妥构造函数模式
```


> javascript继承的6种方法

```
    1.原型链继承

    2.借用构造函数继承

    3.组合继承(原型+借用构造)

    4.原型式继承

    5.寄生式继承

    6.寄生组合式继承
```


详情：[ECMAScript面向对象的程序设计](https://github.com/Aierui/jstraining/blob/master/node/Object-Oriented.md)



#### 用过哪些设计模式？



> 工厂模式：

    主要好处就是可以消除对象间的耦合，通过使用工程方法而不是new关键字。将所有实例化的代码集中在一个位置防止代码重复。

        工厂模式解决了重复实例化的问题 ，但还有一个问题,那就是识别问题，因为根本无法 搞清楚他们到底是哪个对象的实例。

```js

    function createObject(name,age,profession){//集中实例化的函数
        var obj = {} || new Object()
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
```



> 构造函数模式

```js
      function Person(name, age, job){
        this.name = name
        this.age = age
        this.job = job
        this.getName = function(){
          alert(this.name)
        }
      }
      var obj = new Person('aierui',20,'student')
```


```
    使用构造函数的方法 ，即解决了重复实例化的问题 ，又解决了对象识别的问题，该模式与工厂模式的不同之处在于：

    1.构造函数方法没有显示的创建对象 (new Object());

    2.直接将属性和方法赋值给 this 对象;

    3.没有 renturn 语句。

    4.函数名是大写字母P开头，表示构造函数 //借鉴其他OO语言
```




#### js继承方式及其优缺点



> 原型链继承的缺点

```
    一是字面量重写原型会中断关系，使用引用类型的原型，并且子类型还无法给超类型传递参数。
```


> 借用构造函数（类式继承）

```
    借用构造函数虽然解决了刚才两种问题，但没有原型，则复用无从谈起。所以我们需要原型链+借用构造函数的模式，这种模式称为组合继承
```


> 组合式继承

```
    组合式继承是比较常用的一种继承方法，其背后的思路是 使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又保证每个实例都有它自己的属性。
```


具体请看：[JavaScript继承方式详解](http://segmentfault.com/a/1190000002440502)




#### 说说你对作用域链的理解

```js
    javascript 语言特性中，有很多方面和我们接触的其他编程语言不太一样，比如说，

    javascript语言实现继承机制的核心就是 原型，而不是Java语言那样的 类式 继承。

    Javascript 解析引擎在读取一个Object的属性的值时，会沿着 原型链 向上寻找，

    如果最终没有找到，则该属性值为 undefined ； 

    如果最终找到该属性的值，则返回结果。

    与这个过程不同的是，当javascript解析引擎执行“给一个Object的某个属性赋值”的时候，如果当前Object存在该属性，


    则改写该属性的值，如果当前的Object本身并不存在该属性，则赋值该属性的值 。

    作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，

    变量访问到 window 对象即被终止，作用域链向下访问变量是不被允许的。
```


#### 说说你对闭包的理解

```  
   使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，

   会增大内存使用量，使用不当很容易造成内存泄露。在js中，函数即闭包，只有函数才会产生作用域的概念
```


> 闭包有三个特性：

```
    1.函数嵌套函数

    2.函数内部可以引用外部的参数和变量

    3.参数和变量不会被垃圾回收机制回收
```


具体请看：[详解js闭包](http://segmentfault.com/a/1190000000652891)




#### ajax的缺点和在IE下的问题？阐述创建ajax的过程


> ajax的缺点

```
    1、ajax不支持浏览器back按钮。

    2、安全问题 AJAX暴露了与服务器交互的细节。

    3、对搜索引擎的支持比较弱。

    4、破坏了程序的异常机制。

    5、不容易调试。
```

> IE缓存问题

```
    在IE浏览器下，如果请求的方法是 GET ，并且请求的 URL 不变，那么这个请求的结果就会被缓存。

    解决这个问题的办法可以通过实时改变请求的 URL ，只要 URL 改变，就不会被缓存，可以通过在 URL

    末尾添加上随机的时间戳参数('t'= + new Date().getTime())
```


或者：

```
open('GET','demo.php?rand=+Math.random()',true);//
```


> Ajax请求的页面历史记录状态问题

```
    可以通过锚点来记录状态，`location.hash`。让浏览器记录Ajax请求时页面状态的变化。

    还可以通过`HTML5`的`history.pushState`，来实现浏览器地址栏的无刷新改变
```


> 创建ajax的过程

```js
    (1)创建 XMLHttpRequest 对象,也就是创建一个异步调用对象.

    (2)创建一个新的 HTTP 请求,并指定该 HTTP 请求的方法、 URL 及验证信息.

    (3)设置响应 HTTP 请求状态变化的函数.

    (4)发送 HTTP 请求.

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

```
    1.异步加载的方案： 动态插入script标签

    2.通过ajax去获取js代码，然后通过eval执行

    3.script标签上添加defer或者async属性

    4.创建并插入iframe，让它异步执行js

    5.延迟加载：有些 js 代码并不是页面初始化的时候就立刻需要的，而稍后的某些情况才需要的。
```




> `Flash`、`Ajax`各自的优缺点，在使用中如何取舍？

```
    Flash 适合处理多媒体、矢量图形、访问机器；对 CSS 、处理文本上不足，不容易被搜索。

    Ajax 对 CSS 、文本支持很好，支持搜索；多媒体、矢量图形、机器访问不足。

    共同点：与服务器的无刷新传递消息、用户离线和在线状态、操作DOM
```



#### 请解释一下 JavaScript 的同源策略。为什么要有同源限制？

```
    概念:同源策略是客户端脚本（尤其是 Javascript ）的重要的安全度量标准。它最早出自 Netscape Navigator2.0 ，其目的是防止某个文档或脚本从多个不同源装载 


    这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议。

    指一段脚本只能读取来自同一来源的窗口和文档的属性。
```


> 为什么要有同源限制？

```
   我们举例说明：比如一个黑客程序，他利用 Iframe 把真正的银行登录页面嵌到他的页面上，

   当你使用真实的用户名，密码登录时，他的页面就可以通过 Javascript 

   读取到你的表单中 input 中的内容，这样用户名，密码就轻松到手了。
```


> 缺点：

```
    现在网站的 JS  都会进行压缩，一些文件用了严格模式，而另一些没有。

    这时这些本来是严格模式的文件，被 merge 后，这个串就到了文件的中间，

    不仅没有指示严格模式，反而在压缩后浪费了字节。
```



> WEB应用从服务器主动推送Data到客户端有那些方式？ Javascript数据推送

``` 
    Commet：基于HTTP长连接的服务器推送技术
      
    基于 WebSocket 的推送方案
      
    SSE （Server-Send Event）：服务器推送数据新方式
```


#### 你觉得jQuery或zepto源码有哪些写的好的地方

(答案仅供参考)

```
    jquery 源码封装在一个匿名函数的自执行环境中，有助于防止变量的全局污染，

    然后通过传入window对象参数，可以使 window 对象作为局部变量使用，好处是当 jquery 

    中访问window对象的时候，就不用将作用域链退回到顶层作用域了，从而可以更快的访问 window 对象。

    同样，传入 undefined 参数，可以缩短查找undefined时的作用域链。
```


```js
    (function( window, undefined ) {

         //用一个函数域包起来，就是所谓的沙箱

         //在这里边var定义的变量，属于这个函数域内的局部变量，避免污染全局

         //把当前沙箱需要的外部变量通过函数参数引入进来

         //只要保证参数对内提供的接口的一致性，你还可以随意替换传进来的这个参数

        window.jQuery = window.$ = jQuery;

    })( window );
```

```js

    jquery将一些原型属性和方法封装在了 jquery.prototype 中，为了缩短名称，又赋值给了 jquery.fn ，这是很形象的写法。

    有一些数组或对象的方法经常能使用到，jQuery将其保存为局部变量以提高访问速度。

    jquery 实现的链式调用可以节约代码，所返回的都是同一个对象，可以提高代码效率。
```




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

```js
   JSON对象有两个方法：stringify() 和 parse()。这两个方法分别用于把

   JavaScript对象系列化为JSON字符串和把JSON字符串解析为原生的JavaScript值。
```



<h2 id="1.3">网络</h2>


#### 说说网络分层里七层模型是哪七层

- 应用层：应用层、表示层、会话层（从上往下）（`HTTP、FTP、SMTP、DNS`）

- 传输层（`TCP`和`UDP`）

- 网络层（`IP`）

- 物理和数据链路层（以太网）


> 每一层的作用如下：

```
    物理层：通过媒介传输比特,确定机械及电气规范（比特Bit）
    
    数据链路层：将比特组装成帧和点到点的传递（帧Frame）
    
    网络层：负责数据包从源到宿的传递和网际互连（包PackeT）
    
    传输层：提供端到端的可靠报文传递和错误恢复（段Segment）
    
    会话层：建立、管理和终止会话（会话协议数据单元SPDU）
    
    表示层：对数据进行翻译、加密和压缩（表示协议数据单元PPDU）
    
    应用层：允许访问OSI环境的手段（应用协议数据单元APDU）
```


> 各种协议

```
    ICMP协议： （Internet Control Message Protocol）因特网控制报文协议
              它是TCP/IP协议族的一个子协议，用于在IP主机、路由器之间传递控制消息。
    
    TFTP协议： （Trivial File Transfer Protocol）简单文件传输协议 
              是TCP/IP协议族中的一个用来在客户机与服务器之间进行简单文件传输的协议，提供不复杂、开销不大的文件传输服务。
    
    HTTP协议：  (HyperText Transfer Protocol) 超文本传输协议
              是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。
    
    DHCP协议： （Dynamic Host Configuration Protocol）动态主机配置协议
              是一种让系统得以连接到网络上，并获取所需要的配置参数手段。
```




#### HTTP状态码


```html

    1XX表示请求已经接受了，正在处理

    100  Continue  继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息


    2XX 表示处理成功接受，处理掉了
    
    200  OK   正常返回信息

    201  Created  请求成功并且服务器创建了新的资源

    202  Accepted  服务器已接受请求，但尚未处理


    3XX 重定向，比如完成这个操作可能需要重定向，或者更多操作
    
    301  Moved Permanently  请求的网页已永久移动到新位置。

    302 Found  临时性重定向。

    303 See Other  临时性重定向，且总是使用 GET 请求新的 URI。

    304  Not Modified  自从上次请求后，请求的网页未修改过。


    4XX 客户端错误 请求错误 比如说，语法错误，无法实现
    
    400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。

    401 Unauthorized  请求未授权。

    403 Forbidden  禁止访问。

    404 Not Found  找不到如何与 URI 相匹配的资源。


    5XX可能就是服务器端错误，
    
    500 Internal Server Error  最常见的服务器端错误。

    503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。

```


#### GET和POST的区别，何时使用POST？

```
    1.POST是向服务器传递数据；GET是从服务器上获取数据。

    2.POST是通过HTTP POST机制将表单内各个字段及其内容放置在html header内一起传送到action属性所指的url地址。

      用户看不到这个过程；GET是把参数数据队列加到提交表单action属性所指的url中，值和表单内各个字段一一对应，在url中可以看到。
    
    3.对于GET方式，服务器端用Request.QueryString获取变量的值；对于POST方式，服务器端用Request.Form获取提交数据。
    
    4.POST传送的数据量较大，一般默认为不受限制。但理论上，IIS4中最大量为80KB，IIS5中为100KB；GET传递的数据量较小，不能大于2KB。
    
    5.POST安全性较高；GET安全性非常低，但是执行效率却比POST方法好。
    
    6.在做数据添加、修改或删除时，建议用POST方式；而在做数据查询时，建议用GET方式。
    
    7.对于机密信息的数、发送包含未知字符的用户输入时，建议采用POST数据提交方式。
```



> HTTP header中，和缓存相关的字段有：

```
  Cache-control

  Expires

  Age

  Vary
  
  Etag

```



#### HTTP和HTTPS

```

    HTTP 协议通常承载于TCP协议之上，在 HTTP 和 TCP 之间添加一个安全协议层（ SSL 或 TSL ），这个时候，就成了我们常说的HTTPS。

    默认HTTP的端口号为80， HTTPS 的端口号为443。
```


>  为什么 HTTPS 安全

```
  因为网络请求需要中间有很多的服务器路由器的转发。中间的节点都可能篡改信息，而如果使用 HTTPS ，

  密钥在你和终点站才有。 https 之所以比 http 安全，是因为他利用 ssl/tls 协议传输。

  它包含证书，卸载，流量转发，负载均衡，页面适配，浏览器适配，refer传递等。保障了传输过程的安全性
```



#### 说说TCP传输的三次握手四次挥手策略

```
    为了准确无误地把数据送达目标处， TCP 协议采用了三次握手策略。用TCP协议把数据包送出去后， TCP 不会对传送

    后的情况置之不理，它一定会向对方确认是否成功送达。握手过程中使用了TCP的标志： SYN 和 ACK 。

    发送端首先发送一个带 SYN 标志的数据包给对方。接收端收到后，回传一个带有 SYN/ACK 标志的数据包以示传达确认信息。
    
    最后，发送端再回传一个带 ACK 标志的数据包，代表“握手”结束。
    
    若在握手过程中某个阶段莫名中断， TCP 协议会再次以相同的顺序发送相同的数据包。
```



> 断开一个TCP连接则需要“四次握手”：

```
    第一次挥手：主动关闭方发送一个 FIN ，用来关闭主动方到被动关闭方的数据传送，也就是主动关闭方告诉被动关闭方：

              我已经不会再给你发数据了(当然，在fin包之前发送出去的数据，如果没有收到对应的ack确认报文，主动关闭方依然会重发这些数据)，

              但是，此时主动关闭方还可 以接受数据。

    第二次挥手：被动关闭方收到 FIN 包后，发送一个 ACK 给对方，确认序号为收到序号 +1 （与 SYN 相同，一个 FIN 占用一个序号）。

    第三次挥手：被动关闭方发送一个 FIN ，用来关闭被动关闭方到主动关闭方的数据传送，也就是告诉主动关闭方，我的数据也发送完了，不会再给你发数据了。

    第四次挥手：主动关闭方收到 FIN 后，发送一个 ACK 给被动关闭方，确认序号为收到序号+1，至此，完成四次挥手。
```



> 为什么要三次🤝？

```
    在只有两次“握手”的情形下，假设Client想跟Server建立连接，但是却因为中途连接请求的数据报丢失了，

    故Client端不得不重新发送一遍；这个时候Server端仅收到一个连接请求，因此可以正常的建立连接。

    但是，有时候Client端重新发送请求不是因为数据报丢失了，而是有可能数据传输过程因为网络并发量很大在

    某结点被阻塞了，这种情形下Server端将先后收到2次请求，并持续等待两个Client请求向他发送数据...问题就在这里，

    Cient端实际上只有一次请求，而Server端却有2个响应，极端的情况可能由于Client端多次重新发送请求数据而导致

    Server端最后建立了N多个响应在等待，因而造成极大的资源浪费！所以，“三次握手”很有必要！
```


> 为什么要四次👋？

```
    试想一下，假如现在你是客户端你想断开跟Server的所有连接该怎么做？第一步，你自己先停止向Server端发送数据，

    并等待Server的回复。但事情还没有完，虽然你自身不往Server发送数据了，但是因为你们之前已经建立好平等的连接了，

    所以此时他也有主动权向你发送数据；故Server端还得终止主动向你发送数据，并等待你的确认。其实，说白了就是保证双方的一个合约的完整执行！

　　使用TCP的协议：FTP（文件传输协议）、Telnet（远程登录协议）、SMTP（简单邮件传输协议）、POP3（和SMTP相对，用于接收邮件）、HTTP协议等。
```



#### TCP和UDP的区别

```
  TCP（Transmission Control Protocol，传输控制协议）是基于连接的协议，也就是说，在正式收发数据前，必须和对方建立可靠的连接。

  一个 TCP 连接必须要经过三次“对话”才能建立起来

  UDP（User Data Protocol，用户数据报协议）是与TCP相对应的协议。它是面向非连接的协议，它不与对方建立连接，而是直接就把数据包发送过去！

  UDP适用于一次只传送少量数据、对可靠性要求不高的应用环境。
```



> 浏览器可以并行下载多少个资源

```
    浏览器的并发请求数目限制是针对同一域名的，同一时间针对同一域名下的请求有一定数量限制，超过限制数目的请求会被阻塞。
```


> 各个浏览器的并发连接数

Browser|HTTP1.0|HTTP1.1
----|:------:|:----:
IE6，7|2|4
Safari|4|4
Opera|4|4
IE8|6|6
Firefox|6|6
Chrome|6|6



> 静态资源单独使用一个域名的原因有

```
  独立的域名方便我们在代理服务层做动静分离，以便提升静态请求的处理速度。

  原因如下：

      浏览器并发请求数的限制

      网络请求时cookie传输

      方便分流或缓存
```



#### 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？

```
  分为4个步骤：

  （1). 当发送一个URL请求时，不管这个URL是Web页面的URL还是Web页面上每个资源的URL，浏览器都会开启一个线程来

          处理这个请求，同时在远程DNS服务器上启动一个DNS查询。这能使浏览器获得请求对应的IP地址。


  （2). 浏览器与远程 Web 服务器通过 TCP 三次握手协商来建立一个 TCP/IP 连接。该握手包括一个同步报文，
          
          一个同步-应答报文和一个应答报文，这三个报文在 浏览器和服务器之间传递。该握手首先由客户端尝试建立起通信，而后服务器

          应答并接受客户端的请求，最后由客户端发出该请求已经被接受的报文。


  （3). 一旦 TCP/IP 连接建立，浏览器会通过该连接向远程服务器发送 HTTP 的 GET 请求。远程服务器找到资源并使用HTTP

          响应返回该资源，值为200的HTTP响应状态表示一个正确的响应。


  （4). 此时， Web 服务器提供资源服务，客户端开始下载资源。



  请求返回后，便进入了我们关注的前端模块

  简单来说，浏览器会解析 HTML 生成 DOM Tree ，其次会根据CSS生成CSS Rule Tree，而 javascript 又可以根据 DOM API 操作 DOM 

```

详情：[从输入 URL 到浏览器接收的过程中发生了什么事情？](http://fex.baidu.com/blog/2014/05/what-happen/)



#### 什么是Etag？

```
    当发送一个服务器请求时，浏览器首先会进行缓存过期判断。浏览器根据缓存过期时间判断缓存文件是否过期。

    情景一：若没有过期，则不向服务器发送请求，直接使用缓存中的结果，此时我们在浏览器控制台中可以看到  200 OK (from cache) ，

    此时的情况就是完全使用缓存，浏览器和服务器没有任何交互的。


    情景二：若已过期，则向服务器发送请求，此时请求中会带上①中设置的文件修改时间，和 Etag 


    然后，进行资源更新判断。服务器根据浏览器传过来的文件修改时间，判断自浏览器上一次请求之后，文件是不是没有被修改过；

    根据 Etag ，判断文件内容自上一次请求之后，有没有发生变化



    情形一：若两种判断的结论都是文件没有被修改过，则服务器就不给浏览器发 index.html 的内容了，直接告诉它，文件没有被修改过，你用你那边的缓存吧—— 304 Not Modified，此时浏览器就会从本地缓存中获取 index.html 的内容。此时的情况叫协议缓存，浏览器和服务器之间有一次请求交互。<br>

    情形二：若修改时间和文件内容判断有任意一个没有通过，则服务器会受理此次请求，之后的操作同①


    ① 只有get请求会被缓存，post请求不会
```


#### Expires和Cache-Control


```
  Expires 要求客户端和服务端的时钟严格同步。 HTTP1.1 引入 Cache-Control 来克服Expires头的限制。

  如果max-age和Expires同时出现，则max-age有更高的优先级。
```


```js
    Cache-Control: no-cache, private, max-age=0

    ETag: abcde

    Expires: Thu, 15 Apr 2014 20:00:00 GMT

    Pragma: private

    Last-Modified: $now // RFC1123 format
```


#### ETag应用:

```
  Etag 由服务器端生成，客户端通过 If-Match 或者说 If-None-Match 这个条件判断请求来验证资源是否修改。

  常见的是使用 If-None-Match 。请求一个文件的流程可能如下：


  ====第一次请求===

    1.客户端发起 HTTP GET 请求一个文件；

    2.服务器处理请求，返回文件内容和一堆Header，当然包括Etag(例如"2e681a-6-5d044840")(假设服务器支持Etag生成和已经开启了Etag).状态码200



  ====第二次请求===

    客户端发起 HTTP GET 请求一个文件，注意这个时候客户端同时发送一个If-None-Match头，这个头的内容就是第一次请求时服务器返回的Etag：2e681a-6-5d0448402 （hash值）

    服务器判断发送过来的Etag和计算出来的Etag匹配，因此If-None-Match为False，不返回200，返回304，客户端继续使用本地缓存；

    流程很简单，问题是，如果服务器又设置了Cache-Control:max-age和Expires呢，怎么办


    答案是同时使用，也就是说在完全匹配 If-Modified-Since 和 If-None-Match 即检查完修改时间和 Etag 之后，

    服务器才能返回304.(不要陷入到底使用谁的问题怪圈)

```

> 为什么使用Etag请求头?

```
  Etag 主要为了解决  Last-Modified  无法解决的一些问题。
```



#### 如何解决跨域问题

> JSONP：

```
  原理是：动态插入 script 标签，通过 script 标签引入一个 js 文件，这个js文件

  载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的 json 数据作为参数传入。



  由于同源策略的限制， XmlHttpRequest 只允许请求当前源（域名、协议、端口）的资源，

  为了实现跨域请求，可以通过 script 标签实现跨域请求，然后在服务端输出JSON数据并执行回调函数，从而解决了跨域的数据请求。


  优点是兼容性好，简单易用，支持浏览器与服务器双向通信。缺点是只支持GET请求。

  JSONP：json+padding（内填充），顾名思义，就是把JSON填充到一个盒子里
```


```js
<script>
    function createJs(sUrl){

        var oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.src = sUrl;
        document.getElementsByTagName('head')[0].appendChild(oScript);
    }

    createJs('jsonp.js');

    box({
       'name': 'test'
    });

    function box(json){
        alert(json.name);
    }
</script>
```


> CORS

```
  服务器端对于 CORS 的支持，主要就是通过设置 Access-Control-Allow-Origin 来进行的。

  如果浏览器检测到相应的设置，就可以允许 Ajax 进行跨域的访问。
```


> 通过修改document.domain来跨子域

```
  将子域和主域的 document.domain 设为同一个主域.前提条件：这两个域名必须属于同一个基础域名!

  而且所用的协议，端口都要一致，否则无法利用 document.domain 进行跨域

  主域相同的使用 document.domain 
```


> 使用window.name来进行跨域

```
  window 对象有个 name 属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的

  所有的页面都是共享一个 window.name 的，每个页面对 window.name 都有读写的权限， window.name 是

  持久存在一个窗口载入过的所有页面中的
```



> 使用HTML5中新引进的 window.postMessage 方法来跨域传送数据


```
  还有flash、在服务器上设置代理页面等跨域方式。个人认为 window.name 的方法既不复杂，

  也能兼容到几乎所有浏览器，这真是极好的一种跨域方法。
```





<h1 id="2">编程能力</h1>

<h2 id="2.1">数据结构和算法</h2>

```
  数据结构和算法贯穿于编程的每个角落，前端开发也不例外。虽然我们的工作集中在界面交互上，数据结构和算法的使用场景看似不多，

      其实不知不觉我们在使用

  HTML文档本身就是一个棵树，DOM定义了操作这棵树的标准接口，jQuery在标准的DOM API的基础上提供了更好用的接口操作DOM

  JavaScript的Object本身就是一个hashmap

  JSON的数据的序列化和反序列化设计字符串处理的相关算法
  
  前端模版引擎宋昌会利用一些词法分析算法去完成模版的解析和渲染

  Facebook的React在渲染DOM过程中就采用了Diff算法

  数据图表类应用会涉及多种数据算法的应用

  浏览器底层综合利用了多种数据结构和算法才将我们产出的HTML，CSS绘制成用户可见的页面

```



> 实现一个函数，输入一个字符串，检验是否为合法的JSON字符串。如果不合法，标出第一处不符合规则的字符的index和该字符。

```
  判断一个JSON结构是否非法时很简单的，捕捉JSON.parse的异常即可。但要知道index，需要有类似语法分析的流程
```


> 排序算法的时间开销主要可用算法执行中的**数据比较次数**和**数据移动次数**来衡量

```
  时间开销

    排序的时间开销可用算法执行中的数据比较次数与数据移动次数来衡量。 
    
    算法运行时间代价的大略估算一般都按平均情况进行估算。对于那些受对象排序码序列初始排列及对象个数影响较大的，需要按最好情况和最坏情况进行估算

  空间开销

    算法执行时所需的附加存储。

```


> 线性表的链式存储结构一定优于顺序存储结构吗？为什么？

```
  顺序表的特点是逻辑上相邻的数据元素，物理存储位置也相邻，并且，顺序表的存储空间需要预先分配。
  
  优点：
      
      方法简单，各种高级语言中都有数组，容易实现。

      不用为表示节点间的逻辑关系而增加额外的存储开销。

      顺序表具有按元素序号随机访问的特点。
  
  缺点：
      
      在顺序表中做插入、删除操作时，平均移动表中的一半元素，因此对n较大的顺序表效率低。

      需要预先分配足够大的存储空间，估计过大，可能会导致顺序表后部大量闲置；预先分配过小，又会造成溢出。



  在链表中逻辑上相邻的数据元素，物理存储位置不一定相邻，它使用指针实现元素之间的逻辑关系。并且，链表的存储空间是动态分配的。

  优点：

      比顺序存储结构的存储密度小(链式存储结构中每个结点都由数据域与指针域两部分组成，相比顺序存储结构增加了存储空间)。

      逻辑上相邻的节点物理上不必相邻。

      插入、删除灵活 (不必移动节点，只要改变节点中的指针)。

      每个结点是由数据域和指针域组成。

  缺点：

      要占用额外的存储空间存储元素之间的关系，存储密度降低。存储密度是指一个节点中数据元素所占的存储单元和整个节点所占的存储单元之比。

      链表不是一种随机存储结构，不能随机存取元素。

      查找结点时链式存储要比顺序存储慢。

```

> 顺序表与链表的优缺点切好相反，那么在实践应用中怎样选取存储结构呢？通常有以下几点考虑：

```
    顺序表的存储空间是静态分配的，在程序执行之前必须明确规定它的存储规模，也就是说事先对“MaxSize”要有合适的设定，

    设定过大会造成存储空间的浪费，过小造成溢出。因此，当对线性表的长度或存储规模难以估计时，不宜采用顺序表。

    然而，链表的动态分配则可以克服这个缺点。链表不需要预留存储空间，也不需要知道表长如何变化，只要内存空间尚有空闲，

    就可以再程序运行时随时地动态分配空间，不需要时还可以动态回收。

    因此，当线性表的长度变化较大或者难以估计其存储规模时，宜采用动态链表作为存储结构。

    当线性表的长度变化不大而且事先容易确定其大小时，为节省存储空间，则采用顺序表作为存储结构比较适宜。


  
  基于运算的考虑（时间）

    顺序存储是一种随机存取的结构，而链表则是一种顺序存取结构，因此它们对各种操作有完全不同的算法和时间复杂度。

    例如，要查找线性表中的第i个元素，对于顺序表可以直接计算出a(i)的的地址，不用去查找，其时间复杂度为0(1).

    而链表必须从链表头开始，依次向后查找，平均需要0(n)的时间。所以，如果经常做的运算是按序号访问数据元素，显然顺表优于链表。

    反之，在顺序表中做插入，删除时平均移动表中一半的元素，当数据元素的信息量较大而且表比较长时，这一点是不应忽视的；

    在链表中作插入、删除，虽然要找插入位置，但操作是比较操作，从这个角度考虑显然后者优于前者。

  

  基于环境的考虑（语言）

    顺序表容易实现，任何高级语言中都有数组类型；链表的操作是基于指针的。相对来讲前者简单些，也用户考虑的一个因素。

    总之，两种存储结构各有长短，选择哪一种由实际问题中的主要因素决定。通常“较稳定”的线性表，即主要操作是查找操作的线性表，

    适于选择顺序存储；而频繁做插入删除运算的（即动态性比较强）的线性表适宜选择链式存储。

```

> 栈和队列的区别?

```
    栈的插入和删除操作都是在一端进行的，而队列的操作却是在两端进行的。

    队列先进先出，栈后进先出。

    栈只允许在表尾一端进行插入和删除，而队列只允许在表尾一端进行插入，在表头一端进行删除
```


> 栈和堆的区别？

```
    栈区（stack）：由编译器自动分配释放，存放函数的参数值，局部变量的值等。

    堆区（heap） ：一般由程序员分配释放，若程序员不释放，程序结束时可能由OS回收。

    堆（数据结构）：堆可以被看成是一棵树，如：堆排序；

    栈（数据结构）：一种后进先出的数据结构。
```



> 列出你所知道的排序算法名称。及其平均时间复杂度、空间复杂度


<h2 id="2.2">正则表达式</h2>


```
  JavaScript提供了6个方法用于正则表达式，其中2个是正则对戏那个的方法，4个是字符串对象方法。
```

> RegExp.prototype.test()


> RegExp.prototype.exec()


> String.prototype.match()


> String.prototype.search()


> String.prototype.replace()


> String.prototype.split()


详见：[RegExp对象](http://javascript.ruanyifeng.com/stdlib/regexp.html)





<h1 id="3">扩展技术</h1>

<h2 id="3.1">Node.js</h2>


#### node.js相关

> Node.js之所以是一个出色的框架，基于下面几个原因：


```
  JavaScript端到端：可以用JavaScript同时编写服务器端和客户端脚本。

  事件驱动的可扩展性：Node.js应用时间模型在同一个线程上来处理Web请求。

  可扩展性：Node.js追随者多、社区活跃、安装新模块简单

  快速执行：建立Node.js，并在其中开发时超级容易的。

```



> Node.js的事件模型、定时器、发射器、监听器和回调函数

```

```



> Node.js的Buffer、流、I/O

```

```



> 如何实现一个Writable、Readable、Duplex流？

```

```



> 什么是错误优先的回调函数？

```js
  错误优先的回调函数(Error-First Callback)用于同时返回错误和数据。

  第一个参数返回错误，并且验证它是否出错；其他参数用于返回数据。

  fs.readFile(filePath, function(err, data)
  {
      if (err)
      {
          // 处理错误
          return console.log(err);
      }
      console.log(data);
  });

```


> 如何避免回调地狱？

```
  以下方式可以避免回调地狱:

    模块化: 将回调函数转换为独立的函数

    使用流程控制库，例如aync

    使用Promise

    使用aync/await
```


> 什么是Stub?举例说明

```js
  Stub用于模拟模块的行为。测试时，Stub可以为函数调用返回模拟的结果。比如说，当我们写文件时，实际上并不需要真正去写。
  
  var fs = require('fs');
  
  var writeFileStub = sinon.stub(fs, 'writeFile', function(path, data, cb)
  {
      return cb(null);
  });
  
  expect(writeFileStub).to.be.called;
  writeFileStub.restore();


```




> 如何保证依赖的安全性？

```html
  编写Node.js应用时，很可能依赖成百上千的模块。例如，使用了Express的话，会直接依赖27个模块。

  因此，手动检查所有依赖是不现实的。唯一的办法是对依赖进行自动化的安全检查，有这些工具可供选择:

  npm outdated
  
  Trace by RisingStack

  NSP
  
  GreenKeeper
  
  Snyk


```


> 请简要说明module.exports与exports的关系

```js
  module和exports都是模块文件的上下文，更确切地讲，模块文件的代码真正被执行的是被包装过的，比如：

  (function(exports, require, module, __filename, __dirname){//包装头
    console.log("hello world!")//原始文件内容
  })//包装尾

  module和exports都是模块被执行时的参数。其中exports也是module的属性，默认情况下是一个空对对象。

  当require一个模块时，实际上得到的是该模块的exports属性。

  在非repl模式下可以得到验证：

  console.log(module.exports === exports); //true

  console.log(exports); //{}
```


> Node.js在执行require(id)时是怎样找到一个模块的？

```
  Node.js中的require(id)执行分3种情况：引入内建模块、引入文件模块、引入一个包。

  通过id可以分析得到该模块是一个内建模块、文件模块还是包

  若是内建模块时，直接从内存中加载

  
  当id是相对路径或绝对路径时，模块被认为是一个文件模块，通过文件查找可以定位到文件的路径。


  当id既不是内建模块也不是文件模块时，则被认为是一个包。这个包可能通过npm安装的第三方模块。

  包的加载方式为，从当前路径下寻找node_modeules目录中是否存在该包。如果没有，想上一级目录进行查找，

  知道根目录下的node_modules。这个规则可以通过module.paths得到。


  寻找到包后，UI中啊到爆的描述文件pageage.json，该文件的main字段表明了这个包的入口文件，

  此时再按文件的方式找到对应文件即可。

  （目前自动加载扩展名可省略类型.js、.json、.node）

  .node文件在不同的平台下内容不同，在Windows下其实是.dll文件，其他平台下是.so文件

```



> 能否使用require('.json')的方式加载大量的JSON文件？

```
  Node.js中推崇非阻塞I/O,但是require一个模块时确实同步调用的，这会带来性能上的开销，但并不是每次require都很耗时

  因为在require成功之后会缓存起来，再次加载时直接从缓存读取，并没有额外开销。

  当通过.json的方式加载文件时固然方便，但大量使用时会导致这些数据被缓存，大量数据驻留在内存中，导致GC频繁和内存泄露。

```


> Node.js中的异步I/O是如何进行的？

```
  Node.js的异步I/O通过时间循环的方式实现。其中异步I/O又分磁盘I/O和网络I/O。

  在磁盘I/O的调用中，当发起异步调用后，会将异步操作送进libuv提供的队列中，然后返回。

  在磁盘I/O执行完成之后，会形成一个事件，事件循环的过程总发现该事件后，会将其消费。

  消费过程就是将得到的数据和传入的回调函数执行。

  
  网络I/O与磁盘I/O的差异在于他不需要线程池来进行处理，而是在每次事件循环的过程中通过

  IOCP/epoll/kqueue/event ports来获取网络的I/O的事件队列。

```


> Node的子进程有什么原理？

```
  Node的子进程模块为child_process，类似操作系统的API，但又有所不同。

  子进程模块有exec、execFile、fork、spawn4个异步方法和execSync、execFileSync、spawnSync3个同步调用方法。

  child_process模块与操作系统底层API的区别在于它并不是用来spawn和fork当前进程的，

  通过这些API创建出来的子进程与父进程之间没有任何必然的关系。

  当创建出来的子进程也是一个node进程时，可以在两个进程之间通信。Node内建了IPC机制，暴露的API为child.send()和process.on('message')。

  其内部机制在不同的平台下有不同的实现，UNIX下为Domain Socket，Windows为Named Pipe。
    
```

> 进程／线程间的同步机制有？


话题： [linux 下进程间的同步机制有哪些？](https://www.zhihu.com/question/36529093)


> 如何实现在父进程退出时子进程跟着退出？

```

```


> 请写一段代码 ，确保多个进程同时写入同一个文件成功

```
    PHP为例:
    function writeData($filepath, $data) 
    { 
        $fp = fopen($filepath,'a');  

        do{ 
            usleep(100); //微秒
        }while (!flock($fp, LOCK_EX)); //取得独占锁定 
        
        $res = fwrite($fp, $data."\n"); 

        flock($fp, LOCK_UN); //释放锁定
        
        fclose($fp);  
        
        return $res; 
    } 
  
```


> 实现一个能够自动重启的HTTP服务集群？

```

```



> Cluster是什么原理？

```
  Node的 cluster 模块用于解决Node单进程无法充分利用操作系统多核CPU的问题。另外，通过master-cluster模式，

  也可以使得Node应用的健壮性能得到保障。

  Cluster的底层是child_process模块，Node进程间通信除了可以发送普通的消息外，还约定能够发送底层对象，包括TCP、UCP等。

  当一个TCP链接从主进程发送到子进程后，子进程能够根据消息重建出TCP连接，这样 Cluster 可以决定fork出适合硬件资源的

  子进程数。这些子进程能够通过IPC的机制分享对同一个端口的侦听，另外，通过对进程间通信管道的处理，可以自动完成进程退出重启等

```



> 编写一个简单的包，要求能够通过npm进行发布，发布成功，能在另一个项目中进行调用。

```

```


> 如何拼接多个Buffer为一个Buffer？

```
  Buffer.concat(list[, totalLength]);

  list <Array> List of Buffer objects to concat

  totalLength <Number> Total length of the Buffers in the list when concatenated
  
  Return: <Buffer>
  
```



详见：[如何通过饿了么 Node.js 面试](https://github.com/ElemeFE/node-interview)




<h2 id="3.2">ES6</h2>


#### ES6的了解

```
    新增模板字符串（为JavaScript提供了简单的字符串插值功能）

    箭头函数（操作符左边为输入的参数，而右边则是进行的操作以及返回的值 Inputs=>outputs ） 

    for-of （用来遍历数据—例如数组中的值。）

    arguments 对象可被不定参数和默认参数完美代替。 

    ES6 将 Promise 对象纳入规范，提供了原生的 Promise 对象。

    增加了 let 和 const 命令，用来声明变量。增加了块级作用域。let命令实际上就增加了块级作用域。

    ES6规定， var 命令和 function 命令声明的全局变量，属于全局对象的属性； 

    let 命令、 const 命令、 class 命令声明的全局变量，不属于全局对象的属性

    还有就是引入 module 模块的概念
```



<h2 id="3.3">前端框架</h2>

```
  前端框架解决Web应用开发中两个关键问题：

  如何写高可复用，易维护的前端组件

  如何管理前端应用中的数据

  框架： jQuery、Angular、React、VUE、
```
> jQuery

> Angular

> React

> VUE


> 简述基于 jQuery 的组件开发和基于 React 的组件开发的异同
```
  jQuery组件开发需要通过封装类似原生DOM的API，而React可以关注于抽象的组件封装，组件包含了数据初始化、组件渲染、组件挂载等关键的钩子

  jQuery是通过手动定位来实现组件的改变的，代码是命令式的。React通过声明一个方法来表示如何根据数据渲染HTML。代码是声明式的。

  jQuery的组件无法很好的解决嵌套问题。React组件的全部DOM操作、生命周期都由框架一并控制，已由框架解决组件的嵌套问题。
```


> 简述基于 React 的FLUX架构要解决的问题

```

```



> 简述React组件的生命周期

```

```



> 如果组件初始化时需要Ajax获取数据，代码应该写在哪里？

```

```





<h2 id="3.4">数据可视化</h2>

```
  理论知识
    
    计算机图形图像：图形学、图像处理

    数学：高等数学、线性代数、数值计算

    统计分析：数据处理、统计学

    可视理论：数据可视化基本原理和方法

    交互理论：认知心理学

  工程实践
    计算机编程：JavaScript编程基础、Web技能Canvas、SVG、WebGL

```

> 相对来说使用Canvas实现是好的，



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



- 代码层面：避免使用css表达式，避免使用高级选择器，通配选择器。

- 缓存利用：缓存Ajax，使用CDN，使用外部js和css文件以便缓存，添加Expires头，服务端配置Etag，减少DNS查找等

- 请求数量：合并样式和脚本，使用css图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载。

- 请求带宽：压缩文件，开启GZIP，



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





<h2 id="3.6">前端工程</h2>

```
  广义的前端工程是一个系统工程，狭义的前端工程是前端开发流程的一部分。

  前端工程包含许多方面：有以下内容：

  1.代码规范：保证团队所有成员以同样的规范开发代码

  2.分支管理：不同工程师开发如那件的不同功能或组件，按照统一的流程合并进主干

  3.模块管理：一方面，团队引用的模块应该是规范的；另一方面，必须保证这些模块可以正确得加入最终的编译好的软件包

  4.自动化测试：为了保证合并进主干的代码达到质量标准，不会让软件挂掉，必须要有测试，而且测试应试自动化的，可以回归。

  5.构建：主干更新以后，自动将代码编译为最终的目标格式，并且准备好各种静态资源

  6.部署：将构建好的代码部署到生产环境
```

> 很多静态文件不断修改，如何保证浏览器总是加载到修改后的版本？

```html
  一种方法是使用HTTP头信息，指定浏览器不得缓存（或者缓存时间较短）
  
  Cache-Control: no-cache, no-store, must-revalidate

  Pragma: no-cache

  Expires: 0

  但是，这样浏览器每次加载都需要下载相关文件，会增加带宽消耗，也不利于性能。



  常见的方法，为每个静态文件的URL附件一个版本号或哈希作为查询字符串。文件每次更新，就更新版本号。

  <link rel="stylesheet" href="a.css?v=1.0.0"/>
  
  这种方法对于很多静态文件相互依赖的页面会产生问题。因为HTML页面和静态资源文件往往不会同时部署上线。一旦新版的静态资源先上线，

  同时此时又有用户去加载老版的HTML页面，就可能导致问题。



  因此，更好解决方法是，每当静态资源文件有内容变化，就该用一个全新的文件名。

  <link rel="stylesheet" herf="a.v1.0.0.css"/>

  这样就会使得HTML页面和静态资源的版本总是匹配的，再配上灰度发布，就能够实现平滑发布。

```



> 什么是代码的静态检查，以及什么工具可以见检查代码的风格？

```
  静态检查指在不运行代码的前提下，仅仅根据代码的静态解析发现错误的做法。也就是说，静态检查时编译时的检查，而不是运行时的检查。

  常见的检查工具如下：
```

- [ESLint](http://eslint.org/)

- [JSLint](http://www.jslint.com/)

- [JSHint](http://jshint.com/)

- [JSCS](http://jscs.info/)



> 什么是测试金字塔？举例说明

```
  测试金字塔反映了需要写的单元测试、集成测试以及端到端测试的比例:

```
![unit_tests.png](./images/unit_tests.png)

```
  测试HTTP接口时应该是这样的:

  很多单元测试，分别测试各个模块(依赖需要stub)

  较少的集成测试，测试各个模块之间的交互(依赖不能stub)
  
  少量端到端测试，去调用真正地接口(依赖不能stub)
```


#### 自动化构建工具，谈谈你对webpack的看法

```
  WebPack 是一个模块打包工具，你可以使用 WebPack 管理你的模块依赖，并编绎输出模块们所需的静态文件。

  它能够很好地管理、打包Web开发中所用到的 HTML、Javascript、CSS 以及各种静态文件（图片、字体等），

  让开发过程更加高效。对于不同类型的资源， webpack 有对应的模块加载器。 webpack 模块打包器会分析模块间的依赖关系，

  最后 生成了优化且合并后的静态资源。
```

> `webpack`的两大特色：

```
    1.code splitting（可以自动完成）

    2.loader 可以处理各种类型的静态文件，并且支持串联操作
```

`webpack` 是以` commonJS `的形式来书写脚本滴，但对 `AMD/CMD` 的支持也很全面，方便旧项目进行代码迁移。

> `webpack`具有`requireJs`和`browserify`的功能，但仍有很多自己的新特性：


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




<h1 id="4">Web</h1>



<h2 id="4.1">Web安全</h2>


```
  Web安全主要分为客户端脚本安全和服务器端应用安全。

  客户端脚本安全主要包括浏览器安全、跨站脚本攻击(XSS)、跨站点请求伪造(CSRF)、点击劫持(ClickJacking)、HTML5安全；


  服务端安全主要包括

  注入攻击：SQL注入、XML注入、代码注入、CRLF注入等
  
  文件上传漏洞：如FCKEditor上传、绕过文件上传检查功能；
  
  PHP安全：一般会和文件含漏洞、变量覆盖漏洞、代码执行漏洞；

  认证与会话管理、访问控制、加密算法与随机数、Web框架安全、应用层拒绝服务攻击、Web Server配置安全等

  浏览器端主要涉及：同源策略、沙箱等

```




#### 常见web安全及防护原理

> sql注入原理

```
  就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。

  总的来说有以下几点：

    1.永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等。

    2.永远不要使用动态拼装SQL，可以使用参数化的SQL或者直接使用存储过程进行数据查询存取。

    3.永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。

    4.不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息。
```


> XSS原理及防范

```
    Xss(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意  html 标签或者 javascript 代码。比如：攻击者在论坛中放一个

    看似安全的链接，骗取用户点击后，窃取 cookie 中的用户私密信息；或者攻击者在论坛中加一个恶意表单，

    当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点。
```


> XSS防范方法

```
    首先代码里对用户输入的地方和变量都需要仔细检查长度和对`”<”,”>”,”;”,”’”`等字符做过滤；

    其次任何内容写到页面之前都必须加以 encode ，避免不小心把 html tag  弄出来。这一个层面做好，至少可以堵住超过一半的 XSS  攻击。

    首先，避免直接在 cookie  中泄露用户隐私，例如email、密码等等。

    其次，通过使 cookie  和系统 ip 绑定来降低 cookie  泄露后的危险。这样攻击者得到的 cookie  没有实际价值，不可能拿来重放。

    如果网站不需要再浏览器端对 cookie  进行操作，可以在 Set-Cookie  末尾加上 HttpOnly  来防止 javascript  代码直接获取 cookie  。


    尽量采用 POST 而非 GET 提交表单

```



> XSS与CSRF有什么区别吗？

```
    XSS是获取信息，不需要提前知道其他用户页面的代码和数据包。CSRF是代替用户完成指定的动作，需要知道其他用户页面的代码和数据包。

    要完成一次 CSRF 攻击，受害者必须依次完成两个步骤：

    登录受信任网站A，并在本地生成Cookie。

    在不登出A的情况下，访问危险网站B。
```


> CSRF的防御

```
    服务端的 CSRF 方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数。

    通过验证码的方法
```





<h2 id="4.2">综合</h2>


#### 你觉得前端工程的价值体现在哪



    为简化用户使用提供技术支持（交互部分）

    为多个浏览器兼容性提供支持

    为提高用户浏览速度（浏览器性能）提供支持

    为跨平台或者其他基于webkit或其他渲染引擎的应用提供支持

    为展示数据提供支持（数据接口）






#### 对前端模块化的认识

```
    AMD (Asynchronous Module Definition) 即异步模块加载机制 
      是 RequireJS 在推广过程中对模块定义的规范化产出。

    CMD (Common Module Definition) 
      是 SeaJS 在推广过程中对模块定义的规范化产出。

    AMD  是提前执行，CMD 是延迟执行。

    AMD 推荐的风格通过返回一个对象做为模块对象， CommonJS 的风格通过对 module.exports 或 exports 的属性赋值来达到暴露模块对象的目的。
```

推荐: [AMD规范与CMD规范介绍](http://blog.chinaunix.net/uid-26672038-id-4112229.html)


> CMD模块方式


```js
    define(function(require, exports, module) {

      // 模块代码

    });
```


<h1 id="5">案例</h>

#### 通用组件

> 如： Dialog（弹出层）/ Suggestion（自动完成）/ Slider（图片轮播） 等组件

```

```



> 上拉加载、下拉刷新

```

```


> 表单验证类

```

```

> ajax 实现文件上传(图片、文件PDF、word)


> 图片懒加载/加载监听

```

```



> 进度条、全屏滚动、分屏滚动、拖拽组件

```

```



> 文稿的自动保存技术

```

```


> 富文本、MD文档、视频、音频、颜色选择等

```

```





<hr>


> 本文旨在加深对Web知识理解，资料来源相关书籍和网络并加以整理。

#### 参考

- [Front-end-Interview-questions](https://github.com/hawx1993/Front-end-Interview-questions)



#### dynamic

2017-05-19 ElemeFE sofish 说简历筛选没过😫

2017-05-21 投了些Web简历





