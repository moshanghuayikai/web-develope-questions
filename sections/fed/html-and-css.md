
<h2 id="1.1">HTML/CSS</h2>

- [小技巧](#antic)

- [页面布局](#layout)

- [HTML5新特性](#html5)

- [DOM、选择器和继承](#dom-and-section)

- [语义化、兼容性和渲染机制](#semantic)

- [WEB-API](#web-api)

- [COOKIE和SESSION](#cookie-and-session)

- [APPCACHE](#appcache)


<h3 id="antic">小技巧</h3>


> `display:none`和`visibility:hidden`的区别？ 说出6种隐藏元素的方法？

```css
  display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。(不占据空间，涉及到了DOM结构，故产生reflow与repaint)

  visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。(只产生repaint)
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

 /* 使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；*/
```


> 超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了，解决方法是？

```css
  a:link {} a:visited {} a:hover {} a:active {}
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

  /*首先，需要把元素的宽度、高度设为0,然后设置边框样式。

  要做倒立三角形、向右的、或者向左的三角形，只需要为三角形底部设置边框，两腰边框透明即可。*/

  /* 之外我们还可以用 box-sizing 和 border 属性*/
  .caret{
    box-sizing: border-box;
    border: 50px solid;
    border-color: transparent transparent transparent #eee;
  }
```


> CSS如何实现文字两端对齐

```html
<div>要使文字两端对齐</div>
```

```css
div{
  width:500px;
  border:1px solid red;
  text-align: justify;
}
div:after {
  content: " ";
  display: inline-block;
  width: 100%; 
  /*padding-left: 100%;*/ 
  /*padding-left: 100%和width:100%都可以达到效果，选用其一即可*/
}
```

> 渐进增强和优雅降级

```
  渐进增强 ：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、

            交互等改进和追加功能达到更好的用户体验。

  优雅降级 ：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。
```


> CSS中` link` 和`@import `的区别是？

```
  1.link属于HTML标签，而@import( CSS2.1 )是CSS提供的;

  2.页面被加载的时，link会同时被加载，而@import被引用的CSS会等到引用它的CSS文件被加载完再加载;

  3.import只在IE5以上才能识别，而link是HTML标签，无兼容问题;

  4.link方式的样式的权重 高于@import的权重.
```


> `position:absolute`和`float`属性的异同

```
  共同点：对内联元素设置 float 和 absolute 属性，可以让元素脱离文档流，并且可以设置其宽高。
  
  不同点： float 仍会占据位置， absolute 会覆盖文档流中的其他元素。
```


> 说说你对页面中使用定位(position)的理解？

```
  position：static | relative | absolute | fixed | center | page | sticky
  默认值：static，center、page、sticky是CSS3中新增加的值。
  
  1.static 
  可以认为静态的，默认元素都是静态的定位，对象遵循常规流。此时4个定位偏移属性不会被应用，也就是使用left，right，bottom，top将不会生效。

  2.relative 
  相对定位，对象遵循常规流，并且参照自身在常规流中的位置通过top，right，bottom，left这4个定位偏移属性进行偏移时不会影响常规流中的其他元素。

  3.absolute 
  a、绝对定位，对象脱离常规流，此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到body元素。盒子的偏移位置不影响常规流中的任何元素，其margin不与其他任何margin折叠。
  b、元素定位参考的是离自身最近的定位祖先元素，要满足两个条件，第一个是自己的祖先元素，可以是父元素也可以是父元素的父元素，一直找，如果没有则选择body为对照对象。第二个条件是要求祖先元素必须定位，通俗说就是position的属性值为非static都行。

  4.fixed 
  固定定位，与absolute一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动。

  5.center 
  与absolute一致，但偏移定位是以定位祖先元素的中心点为参考。盒子在其包含容器垂直水平居中。（CSS3）

  6.page 
  与absolute一致。元素在分页媒体或者区域块内，元素的包含块始终是初始包含块，否则取决于每个absolute模式。（CSS3）

  7.sticky 
  对象在常态时遵循常规流。它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性的表现是现实中你见到的吸附效果。（CSS3）
```

传送门：[例题](https://www.nowcoder.com/profile/2851715/myFollowings/detail/3233480)



> 行内元素和块级元素的区别和他们的特点是什么？总结如下：

```
  块级元素会独占一行,默认情况下,其宽度自动填满其父元素宽度.

  行内元素不会独占一行,相邻的行内元素会排列在同一行里,直到一行排不下,才会换行,其宽度随元素的内容而变化.　另外

  块级元素可以设置width,height属性.行内元素设置width,height属性无效，它的长度高度主要根据内容决定.
  
  块级元素即使设置了宽度,仍然是独占一行.
  
  块级元素可以设置margin和padding属性.

  行内元素的margin和padding属性,
  水平方向的padding-left,padding-right,margin-left,margin-right都产生边距效果,
  竖直方向的padding-top,padding-bottom,margin-top,margin-bottom却不 会产生边距效果.
  
  块级元素对应于display:block 行内元素对应于display:inline
```



> iframe有哪些缺点？

```
  iframe会阻塞主页面的 Onload 事件；
  搜索引擎的检索程序无法解读这种页面，不利于 SEO;
  iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
  使用iframe之前需要考虑这两个缺点。

  如果需要使用 iframe ，
  最好是通过 javascript 动态给iframe添加 src 属性值，这样可以绕开以上两个问题。
```


> Label标签的作用是什么，是怎么用的？

```
  label 标签的 for 对应一个 id 用于二者的关联
```



> 如何在页面上实现一个圆形的可点击区域？

```
  1、map+area 或者 svg

  2、border-radius

  3、纯 js 实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等
```



> 实现不使用 border 画出1px高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果？

```html
  <div style="width:100%;height:1px;background-color:black"></div>
  <!-- 这种题其实就是需要换个角度，实际谁TM会这个干 -->
```


>  这个标签很神奇

```html
  <marquee scrolldelay="300" direction="left">Welcome!</marquee>
```


> 去除inline-block元素间间距的N种方法

```
  使用font-size:0 

  使用letter-spacing

  使用word-spacing

  // 都浮动 
```


- 更多：[去除inline-block元素间间距的N种方法](http://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)


> ELement.classList

```css
element.classList.add( String [, String] )
  /* 添加指定的类值。如果这些类已经存在于元素的属性中，那么它们将被忽略 */

element.classList.remove( String [,String] )
  /* 删除指定的类值 */

element.classList.item ( Number )
  /* 按集合中的索引返回类值 */

element.classList.toggle ( String [, force] )
  /* 当只有一个参数时：切换 class value; 即如果类存在，则删除它并返回false，如果不存在，则添加它并返回true 
     当存在第二个参数时：如果第二个参数的计算结果为true，则添加指定的类值，如果计算结果为false，则删除它
  */

element.classList.contains ( String )
  /* 检查元素的类属性中是否存在指定的类值 */

```

- 更多：[Element.classList](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)


<h3 id="layout">常见的页面布局</h3>


##### 如何将页脚固定在页面底部?


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



#####  如何实现元素水平居中、垂直居中、水平垂直居中？

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




> 左右固定，中间自适应

```html
  <div class="box">
    <div class="left">left</div>
    <div class="content">content</div>
    <div class="right">right</div>
  </div>
```

- 方案一 采用浮动和margin

```css
  .box{
    position: relative;
  }
  .left,.right{
    width: 200px;
    height: 800px;
    background-color: #eee;
  }
  .left{
    float: left;
  }
  .right{
    float:right
  }
  .content{
    margin: 0 200px;
  }
```

- 方案二：采用position和margin

```css
  .box{
    position: relative;
  } 
  .left,.right{
    position: absolute;
    top: 0;
    width: 200px;
    height: 800px;
    background-color: #eee;
  }
  .left{
    left: 0;
  }
  .right{
    right: 0;
  }
  .content{
    margin: 0 200px;
  }
```

- 方案三：采用flex、浮动和margin负值

```css
  /*注意：如果父元素采用flex布局就不用改变dom结构，如果父元素不是felx，就需要调整dom结构，让content位于最前面。
  */
  .box{
    display: flex;//如果不是就调整dom结构
  }
  .left, .right{
    float: left;
    width: 200px;
    height: 800px;
    background-color: #eee;
  }
  .left{
    margin-left: -100%;/*浮动到最左侧*/
  }
  .right{
    margin-left: -200px;
  }
  .content{
    float: left;
    width: 100%;
    height: 800px;
  }
```


- 更多： 圣杯布局、双飞翼布局、多栏、弹性、流式、瀑布流、响应式布局



> 纯 CSS 实现自适应正方形

```html
  <div class="box"></div>
```


- 方案一：利用VW单位

```css
  .box{
    width: 100%;
    height: 100vw; // 1% == 1vw
  }
```



- 方案二：利用padding的百分比，width和padding-bottom的百分比一致即可

```css
  .box{// 
    width: 100%;
    height:0;
    padding-bottom: 100%;
  }  

```


- 方案三：利用伪类元素

```css
  .box{
    width: 100%;
    overflow: hidden;
  }
  .box:after{
    content: '';
    display: block;
    margin-top: 100%;
  }
```







> 各个的浏览器前缀

```
  -webkit  chrome和safari

     -moz  firefox

      -ms  IE

       -o  opera
```


> 浏览器的内核分别

```
    IE: trident 内核

    Firefox ： gecko 内核
    
    Safari:webkit 内核
    
    Opera: 以前是 presto 内核， Opera 现已改用 Google Chrome 的 Blink 内核
    
    Chrome:Blink( 基于 webkit ， Google 与 Opera Software 共同开发 )
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
- 更多：[阮一峰老师的Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)




> 说说你理解的盒模型（CSS Box Model）

```
  盒模型是一个种布局方式，每个元素都被表示一个矩形的盒子，有尺寸大小、属性、颜色、边框和位置（渲染）目标。
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
	

> CSS3中新增了一种盒模型计算方式：`padding-box`。盒模型默认的值是`content-box`, 还有常用的 `border-box`，几种盒模型计算元素宽高的区别如下：

- `content-box（默认）`



```css
  布局所占宽度Width：

  width = width + padding-left + padding-right + border-left + border-right


  布局所占高度Height:

  height = height + padding-top + padding-bottom + border-top + border-bottom
```

- `padding-box`



```css
  布局所占宽度Width：

  width = width(包含padding-left + padding-right) + border-top + border-bottom


  布局所占高度Height:

  height = height(包含padding-top + padding-bottom) + border-top + border-bottom
```

- `border-box`



```css
  布局所占宽度Width：

  width = width(包含padding-left + padding-right + border-left + border-right)


  布局所占高度Height:

  height = height(包含padding-top + padding-bottom + border-top + border-bottom)
```



> z-index的使用？

```
  z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。

  z-index 属性仅在节点的 position 属性为 relative, absolute 或者 fixed 时生效 (父元素不可以是 relative)
```



<h3 id="semantic">语义化、兼容性和渲染机制</h3>



> 说说你对语义化的理解？

```
  1.去掉或者丢失样式的时候能够让页面呈现出清晰的结构

  2.有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；

  3.方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；

  4.便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
```



详见：[前端开发规范手册](http://zhibimo.com/read/Ashu/front-end-style-guide/index.html) 👍



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

   作用是：告诉浏览器按照何种规范解析页面
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




> 兼容性方面问题更多见 👇

[兼容性问题与浏览器的内核及渲染模式](http://www.w3help.org/zh-cn/kb/001/)


> 回流（Reflow）和重绘（Repaint）

```
  提高高性能DOM就不得不提到回流和重绘，那么什么是回流什么是重绘？ 
  
  回流 
  当render树的一部分或者全部因为大小边距等问题发生改变而需要重建的过程，叫做回流。（回流相当于给人做了一次抽脂手术）

  重绘 
  当诸如颜色背景等不会引起页面布局变化，而只需要重新渲染的过程叫做重绘。（重绘就好像给人染了一个头发）


  重绘的代价要比回流小，毕竟重绘只涉及样式的改变，不涉及到布局。
  回流一定触发重绘，但是重绘不一定触发回流。
```



> 什么情况下会触发回流和重绘？

```
  什么会引起回流

  1、页面渲染初始化。
  2、DOM结构变化，比如删除了某个节点。（骨头都被打断了，肯定比抽脂更严重，所以会引发回流）
  3、render树变化，比如减少了padding。（也就是进行抽脂手术）
  4、窗口resize事件触发。
  5、字体大小

  什么回引起重绘？
  1、字体颜色、元素背景
```


> 如何避免触发回流和重绘

```
  减少回流

  1、避免逐项更改样式。最好一次性更改style属性，或者将样式列表定义为class并一次性更改class属性。
  2、避免循环操作DOM。创建一个documentFragment或div，在它上面应用所有DOM操作，最后再把它添加到window.document。
  3、避免多次读取offsetLeft等属性。无法避免则将它们缓存到变量。
  4、将复杂的元素绝对定位或固定定位，使它脱离文档流。否则回流代价十分高

  减少重绘
```



> 简述一下src与href的区别？

```
  src用于替换当前元素， href 用于在当前文档和引用资源之间确立联系。
  
  src是 source 的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本， img 图片和 frame 等元素。
 
  <script src ='js.js'></script>
  
  当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。 (这也是为什么将js脚本放在底部而不是头部)
  

  href是 Hypertext Reference 的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加
  
  <link href='common.css' rel='stylesheet'/>

  那么浏览器会识别该文档为css文件，就会 并行下载资源 并且不会停止对当前文档的处理。(不阻塞渲染不阻塞DOM解析)

  这也是为什么建议使用 link 方式来加载 css ，而不是使用 @import 方式。
```



> script标签的defer、async的区别

```
  defer是在HTML解析完之后才会执行，如果是多个，按照加载的顺序依次执行
  async是在加载完成后立即执行，如果是多个，执行顺序和加载顺序无关
```





> 介绍一下你对浏览器内核的理解？

```
  主要分成两部分：渲染引擎(layout engineer或 Rendering Engine) 和 JS 引擎。

  渲染引擎：负责取得网页的内容（HTML、 XML 、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，
          然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。
          所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

  JS引擎则：解析和执行 javascript 来实现网页的动态效果。最开始渲染引擎和JS引擎并没有区分的很明确，后来 
          JS 引擎越来越独立，内核就倾向于只指渲染引擎。
```


分析：[Web图片资源的加载与渲染时机](https://segmentfault.com/a/1190000010032501)





##### 浮动元素引起的问题和解决办法？


> 解释下浮动和它的工作原理？清除浮动的技巧

```
  浮动的实现主要是为了实现文字环绕效果 浮动不是bug，是特性(标准)，但浮动具有破坏性。

  浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。


  1.使用空标签清除浮动。

     这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。

  2.使用overflow。

     给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。

  3.使用after伪对象清除浮动。

     该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素；
```



> 浮动元素引起的问题：

```
  1.父元素的高度无法被撑开，影响与父元素同级的元素

  2.与浮动元素同级的非浮动元素（内联元素）会跟随其后

  3.若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构
```



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


> 对WEB标准以及W3C的理解与认识?

```
  标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索机率、使用外 链css和 js 脚本、结构行为表现的分离、
  文件下载与页面速度更快、内容能被更多的用户所访问、内容能被更广泛的设备所访问、更少的代码和组件，
  容易维 护、改版方便，不需要变动页面内容、提供打印版本而不需要复制内容、提高网站易用性。
```



> 对BFC规范的理解？

```css
  BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。

  在同一个BFC中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的margin会发生折叠。

  W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用。
```


- 更多： [块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)




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
  IE和FF都存在，相邻的两个div(块级元素)的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生塌陷，

      塌陷的最终尺寸是两个值中较大的一个。

  解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。

      当然，还可以将两个元素设置display: inline-block;或者浮动

      发生塌陷的不只是兄弟元素，父子关系也会发生，当父元素没有设定padding-top或border-top时（等于0），

      子元素的margin-top会和父元素的margin-top合并，与兄弟元素一样，margin最终会取值较大的作用于父元素，子元素会紧贴父元素上边界。
```


> 当margin-top、padding-top的值是百分比时，分别是如何计算的？

```
  相对最近父级块级元素的width，相对最近父级块级元素的width

  margin: 规定基于父元素的 宽度 的百分比的外边距

  padding: 规定基于父元素的 宽度 的百分比的内边距
```



> padding 对于block、inline 水平元素

```
  对于block块级元素

    padding值暴走，一定会影响尺寸


  对于inline水平元素

    水平padding影响尺寸，垂直padding不影响尺寸，但是会影响会背景色（占据空间）
```


> IFC（Inline Formatting Context）即行内格式化上下文





<h3 id="dom-and-section">DOM、选择器和继承</h3>



##### DOM操作——怎样添加、移除、移动、复制、创建和查找节点。


> 创建新节点

```css
  createDocumentFragment()    //创建一个DOM片段

  createElement()   //创建一个具体的元素

  createTextNode()   //创建一个文本节点
```

> 添加、移除、替换、插入

```css
  appendChild()

  removeChild()

  replaceChild()

  insertBefore() //并没有insertAfter() 如何实现一个 insertAfter() 呢？
```


> 查找

```css
  element | document.querySelector() //匹配该选择器的元素节点(若匹配多个则返回第一个) 空则返回null 但是，它们不支持CSS伪元素的选择器

  element | document.querySelectorAll() //返回 NodeList 对象，包含所有匹配给定选择器的节点 

  element | document.getElementsByTagName()    //通过标签名称 返回值是一个类似数组的 HTMLCollection 对象 集合

  element | document.getElementsByClassName()   //返回值是一个类似数组的 HTMLCollection 对象 集合

  document.getElementsByName()   //返回一个类似数组的 NodeList 对象的实例 仅限使用于拥有name属性的HTML元素

  document.getElementById()    //返回匹配指定id属性的元素节点，空则返回null 

  document.elementFromPoint(横坐标 , 纵坐标)    //方法返回位于页面指定位置最上层的Element子节点
```


> DOM模型中节点类型有？

```      
  Document节点（document节点是文档的根节点，每张网页都有自己的document节点，window.document属性就指向这个节点。只要浏览器开始载入HTML文档，这个节点对象就存在了，可以直接调用）

  Element节点（Element对象对应网页的HTML标签元素，每一个HTML标签元素，在DOM树上都会转化成一个Element节点对象）

  Text节点（Text节点代表Element节点和Attribute节点的文本内容）

  DocumentFragment节点（代表一个文档的片段，本身就是一个完整的DOM树形结构）
```


> DOM提供两种集合对象：NodeList对象、HTMLCollection对象

```js
  typeof NodeList // "function"

  typeof HTMLCollection // "function"
```



> 常见的基于关系的选择器

```
A E             元素A的任一后代元素E (后代节点指A的子节点，子节点的子节点，以此类推)
A > E           元素A的任一子元素E(也就是直系后代)
B + E           元素B的任一下一个兄弟元素E
B ~ E           B元素后面的拥有共同父元素的兄弟元素E
E:first-child   任一是其父母结点的第一个子节点的元素E
```


##### 盒模型相关属性


- Element.clientHeight，Element.clientWidth

```
 这两个属性的值包括Padding、但不包括滚动条、边框和Margin，单位为像素
```

- Element.clientLeft (元素节点左边框（left border）的宽度)，Element.clientTop (top border）的宽度)

```
 这两个属性包括边框和滚动条的宽度，但不包括Margin和Padding，元素的显示设为display: inline，它的clientLeft属性一律为0
```


- Element.offsetHeight，Element.offsetWidth

```
 这两个属性值包括Padding和Border、以及滚动条。这也意味着，如果不存在内容溢出，Element.offsetHeight只比Element.clientHeight多了边框的高度
```


- Element.offsetLeft，Element.offsetTop

```
  Element.offsetLeft返回当前元素左上角相对于Element.offsetParent节点的水平位移
  Element.offsetTop返回垂直位移，单位为像素。通常，这两个值是指相对于父节点的位移。

  都和margin有关
```


![](./assets/css-model.png)


- Element.scrollHeight，Element.scrollWidth

```
 某个网页元素的总高度，总宽度（都包括由于溢出容器而无法显示在网页上的那部分高度或宽度）
```


- Element.scrollLeft，Element.scrollTop

```
 网页元素的水平滚动条向右(向下)侧滚动的像素数量
```




- Element.style

- 某个网页元素距离视口左上角的坐标，使用 Element.getBoundingClientRect 方法读取。






##### CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？

```
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



> 哪些属性可以继承？

```
  不可继承的：
    display、margin、border、padding、background、height、min-height、max-height、width、min-width、max-width、overflow、position、left、right、top、bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、page-bread-before和unicode-bidi

  所有元素可继承：visibility和cursor

  内联元素可继承：
    letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction

  终端块状元素可继承：text-indent和text-align

  列表元素可继承：list-style、list-style-type、list-style-position、list-style-image

  表格元素可继承：border-collapse
```


- 更多：[CSS 继承属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance)


> 优先级为

```
  !important > 行内样式 > ID选择器 > 类选择器 = 伪类 > 标签 > 通配符 > 继承 > 浏览器默认属性

   类选择器 = 伪类 ⚠️
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

> 伪类选择器还有哪些？

```
first-child()
last-child()
link
visited
hover
active
focus
after
before
first-letter
first-line
lang(language)

太多了🏋️
```

- 更多：[CSS 参考--选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#选择器)


> CSS3有哪些新特性？

```css
    CSS3实现圆角（border-radius），阴影（box-shadow），

    对文字加特效（text-shadow(css2)），线性渐变（gradient），旋转（transform）

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



> CSS分辨率就是 物理分辨率 / 设备像素比（dpr或者dppx）

```
  物理分辨率就是设备的显示屏物理像素分辨率
```


<h3 id="html5">HTML5新特性</h3>

##### HTML5 有哪些新特性、移除了哪些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？作用

```
  HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

  拖拽释放(Drag and drop) API

  语义化更好的内容标签（header, hgroup, nav, section, article, aside, footer, figure, menu, main,） //目前所有主流浏览器都不支持 <menu> 标签

  音频、视频API(audio,video)

  画布(Canvas) API

  地理(Geolocation) API

  本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；

  sessionStorage 的数据在浏览器关闭后自动删除


  表单控件，calendar、date、time、email、url、search

  新的技术webworker, websocket, Geolocation
 ```     


> 移除的元素

```
  纯表现的元素：basefont，big，center，font, s，strike，tt，u；

  对可用性产生负面影响的元素：frame，frameset，noframes；
```

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

> 作用 ？

```
  使Web页面的内容更加有序和规范

  使搜索引擎更加容易按照HTML5规则识别出有效的内容 

  使Web页面更接近于一种数据字段和表
```


> HTML5 有哪些新增的表单元素？

```
  datalist

  keygen

  output
```

> `data-`属性的作用是什么？

```
  data- 为H5新增的为前端开发者提供自定义的属性，这些属性集可以通过对象的  dataset  属性获取，不支持该属性的浏览器可以通过  getAttribute  方法获取。

  需要注意的是： data- 之后的以连字符分割的多个单词组成的属性，获取的时候使用驼峰风格。 所有主流浏览器都支持 data-* 属性。
  即：当没有合适的属性和元素时，自定义的 data 属性是能够存储页面或 App 的私有的自定义数据。
```


> 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？


```html
    
    FOUC - Flash Of Unstyled Content 文档样式闪烁

    <style type="text/css" media="all">@import "../fouc.css";</style>

      引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，

      因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。

      解决方法简单的出奇，只要在<head>之间加入一个<link>或者<script>元素就可以了。
```



<h3 id="web-api"> Web Worker 、Web Socket 、Web Storage</h3>


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


> sessionStorage、localStorage API

```
  sessionStorage | localStorage.setItem(key, value)
  sessionStorage | localStorage.getItem(key)
  sessionStorage | localStorage.removeItem(key)
  sessionStorage | localStorage.clear(key)
  sessionStorage | localStorage.length(key)  
```


> 实现 getAll 方法，获取本地存储

```js
  localStorage.getAll = function() {
    var obj = [];
    for(var i = 0;i < localStorage.length;i++) {
        obj.push(localStorage.key(i));
    }
    return obj;
  }
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


```
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




<h3 id="cookie-and-session">COOKIE和SESSION</h3>


> 浏览器会话机制是？

```
    当浏览器向服务器发送URL请求，服务器会生成一个会话ID，并将浏览器端的一些信息保存在服务器端，

    然后将会话ID送到浏览器端保存到cookie里，当浏览器再次向服务器发送请求时会将cookie里的会话ID

    一并发送给服务器，服务器会将接收到的会话ID和服务器里的ID比较，如果相同服务器就认定是一次会话，

    就可以找到本次会话中保存的信息。
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


> 请你谈谈Cookie的弊端

```
    1.IE6或更低版本最多20个cookie

    2.IE7和之后的版本最后可以有50个cookie。

    3.Firefox最多50个cookie

    4.chrome和Safari没有做硬性限制



    虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。
    IE 和 Opera  会清理近期最少使用的 cookie ， Firefox 会随机清理 cookie 。
    cookie 的最大大约为 4096 字节，为了兼容性，一般不能超过 4095 字节。
    IE 提供了一种存储可以持久化用户数据，叫做 userdata ，从 IE5.0 就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。
```


> 优点：极高的扩展性和可用性

```
  1.通过良好的编程，控制保存在cookie中的session对象的大小。

  2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。

  3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。

  4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。
```


> 缺点：

```
  1.Cookie 数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉.

  2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。

  3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。
```



> 如何保证Session的安全？

```
  验证用户的使用环境[浏览器和 IP 地址]。 
      分配给用户 Session ID 时，同时探明用户使用的浏览器和 IP 地址，作为验证依据，使非法用户不能进行 Session ID 欺骗。 
  
  正确处理 Session 变量。  
      当用户注销时，立即删除 Session ID 。并设置好 Session 的生存周期，过期就自动删除。 
```





<h3 id="appcache">AppCache</h3>

> HTML5 应用程序缓存和浏览器缓存有什么区别？

```html
  应用程序缓存是 HTML5  的重要特性之一，提供了离线使用的功能，让应用程序可以获取本地的网站内容，例如 HTML 、 CSS 、图片以及 JavaScript 。这个特性可以提高网站性能，它的实现借助于 manifest 文件，如下：
  <!doctype html>
  <html manifest=”example.appcache”>
   …..
  </html>
   
  与传统浏览器缓存相比，它不强制用户访问的网站内容被缓存。
```

- 更多：[使用应用缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Using_the_application_cache)







##### Final

> 不断更新中…… 如果发现问题欢迎在 [issues](https://github.com/Aierui/web-develope-questions/issues) 中指出。如果有比较好的问题/知识点/指正，也欢迎提 PR。

