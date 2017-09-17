

<h2 id="1.2">JavaScript</h2>



- [变量类型](#variable-and-type)

- [原型和原型链](#prototype-and-prototype-chain)

- [作用域和闭包](#scope-and-closure)

- [异步和单线程](#async-and-single-thread)

- [DOM、BOM 等操作](#dom-and-bom-operation)

- [事件](#event)

- [必会的小算法](#javascript-algorithm)

- [AJAX](#ajax-and-json)






<h3 id="variable-and-type">变量类型</h3>


#### 数据类型有哪些、值类型、引用类型、typeof、instanceof、 数据类型转换、Object.prototype.toString


> 数据类型有哪些？

```js
  数值（number）

  字符串（string）

  布尔值（boolean）

  undefined

  null

  对象（object）

  Symbol (ES6新增)

```


> 值类型

```js
  值类型：number、string、boolean、undefined、null(特殊 被认为是空的对象引用)
```


> typeof

```js
  typeof：number、string、boolean、undefined、function、object( {}、[]、null )
```


> 引用类型、instanceof、Object.prototype.toString

```js
  引用类型：Array 、Object 、Function 、Date 、 RegExp 、 基本包装类型 (Boolean、Number、String)
```


> 数据类型转换

```js
  强制转换

    主要指使用Number、String和Boolean三个构造函数，手动将各种类型的值，转换成数字、字符串或者布尔值

  自动转换

    不同类型的数据互相运算  如：字符串拼接

    对非布尔值类型的数据求布尔值  如：if语句

    对非数值类型的数据使用一元运算符  如：逻辑运算
```



> 基本包装类型 (Boolean、Number、String)

```js
  console.log(new Boolean(1))
  VM1056:1 Boolean {[[PrimitiveValue]]: true}__proto__: Boolean[[PrimitiveValue]]: true
  
  console.log(new Number(1))
  VM1058:1 Number {[[PrimitiveValue]]: 1}

  console.log(new String('A'))
  VM1060:1 String {0: "A", length: 1, [[PrimitiveValue]]: "A"}
```




> 抽象(宽松)相等比较 (==) 与 严格相等比较 (===)

[JavaScript 中的相等性判断](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)



> js 中， 0.1 + 0.2 === 0.3 是否为 true ? 在不知道浮点数位数时应该怎样判断两个浮点数之和与第三数是否相等？


![](./assets/javascript_01020304.png)

```js
  function calc_float(arg1,arg2){
    var r1,r2,m;
      try{
      r1=arg1.toString().split(".")[1].length
    }catch(e){
      r1=0
    }
      try{
      r2=arg2.toString().split(".")[1].length
    }catch(e){
      r2=0
    }
    
      m=Math.pow(10,Math.max(r1,r2))
    
      return (parseInt(arg1*m)+parseInt(arg2*m))/m
  }
```



[传送门](http://blog.forga.me/2017/04/05/js-float-equal/)

> Object.prototype.toString

```js
    console.log(Object.prototype.toString.call(123)) //[object Number]
    console.log(Object.prototype.toString.call('123')) //[object String]
    console.log(Object.prototype.toString.call(undefined)) //[object Undefined]
    console.log(Object.prototype.toString.call(true)) //[object Boolean]
    console.log(Object.prototype.toString.call({})) //[object Object]
    console.log(Object.prototype.toString.call([])) //[object Array]
    console.log(Object.prototype.toString.call(function(){})) //[object Function]
```


> null和undefined的区别？
    
    null 是一个表示"无"的对象，转为数值时为0； undefined 是一个表示"无"的原始值，转为数值时为 NaN 。

    Number(null))// 0  Number(undefined)) // NaN

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



#### 变量赋值、内存泄露、端事件差异区别


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

  但BOM与DOM对象却是通过引用计数回收垃圾的，也就是说只要涉及 BOM 及 DOM 就会出现循环引用问题。
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



<h3 id="prototype-and-prototype-chain">原型和原型链</h3>

> 原型规则

```
  所有引用类型都具有对象特性，即可扩展属性

  所有引用类型都有一个 __proto__ 属性，属性值是一个普通的对象

  所有的引用类型，__proto__ 属性值指向它的构造函数  prototype  属性值

  所有 函数 都有一个 prototype 属性，属性值也是一个普通的对象

  当试图得到一个对象的某个属性时，如果这个对象本身没有则会去它的 prototype 中寻找
```



> new 操作符具体干了什么呢?

```js
   1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。

   2、属性和方法被加入到 this 引用的对象中。

   3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。


    var obj  = {};

    obj.__proto__ = Base.prototype;

    Base.call(obj);
```

> 原型 感受一下 ☺️

```
  function Car(){};
  var car = new Car();

  car.__proto__ === Car.prototype  // true
  car.__proto__.__proto__ === Object.prototype // true
  Car.__proto__ === Function.prototype  // true
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







<h3 id="scope-and-closure">作用域和闭包</h3>


> 函数声明 和 函数表达式 的区别？

```
  在一段js代码真正一句一句运行之前，浏览器已经做了一些“准备工作”，

  比如如下几种数据类型分别是

    变量、函数表达式——变量声明，默认赋值为undefined；

    this——赋值；
    
    函数声明——赋值

  三种数据的准备情况我们称之为“执行上下文”或者“执行上下文环境”
```
[立即执行函数: (function ( ){...})( ) 与 (function ( ){...}( )) 有什么区别?](https://segmentfault.com/q/1010000000442042)


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

> this ？ 

```
  this 要在执行时才能确认值、定义时无法确认。
```


> `call()` 和 `apply()` 的区别和作用？ bind ？

```js
  作用：动态改变某个类的某个方法的运行环境（执行上下文）。

  apply()函数有两个参数：第一个参数是上下文，第二个参数是参数组成的数组。如果上下文是null，则使用全局对象代替。例如：

  function.apply(this,[1,2,3])

  call()的第一个参数是上下文，后续是实例传入的参数序列，例如：

  function.call(this,1,2,3);

  var fn = function(name, age){
    alert(name)
    console.log(this)
  }.bind({x:100})

  fn('aierui', 20)
```

> for函数中的i变量为什么不能保存?原理是什么?


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





<h3 id="async-and-single-thread">异步和单线程</h3>



> 同步和异步的区别是什么？ 分别举一个例子



```
  同步是指：发送方发出数据后，等接收方发回响应以后才发下一个数据包的通讯方式。 (阻塞代码继续执行)
  异步是指：发送方发出数据后，不等接收方发回响应，接着发送下个数据包的通讯方式。 （不会阻塞）
  
  何时需要异步

    在可能需要等待
     
    定时任务 setTimeout、setinterval
    
    网络请求 ajax请求、动态加载 img、等等
     
    事件绑定 

  何时需要同步
```

> setTimeout、setinterval


> 单线程

```
  一次只能执行一个程序叫做单线程
  一次能执行多个程序叫多线程
  （正常恋爱与脚踏n条船）
```




#### 异步加载和延迟加载

```
    1.异步加载的方案： 动态插入script标签

    2.通过ajax去获取js代码，然后通过eval执行

    3.script标签上添加defer或者async属性

    4.创建并插入iframe，让它异步执行js

    5.延迟加载：有些 js 代码并不是页面初始化的时候就立刻需要的，而稍后的某些情况才需要的。
```


> [Promise](#Promise)





<h3 id="dom-and-bom-operation">DOM、BOM 等操作</h3>



#### 列举IE 与其他浏览器不一样的特性？

- IE支持`currentStyle`，FIrefox使用`getComputStyle`

- IE  使用`innerText`，Firefox使用`textContent`

- 滤镜方面：IE:`filter:alpha(opacity= num)`；Firefox：`-moz-opacity:num`

- 事件方面：IE：`attachEvent`：火狐是`addEventListener`

- 鼠标位置：IE是`event.clientX`；火狐是`event.pageX`

- IE使用`event.srcElement`；Firefox使用`event.target`

- IE中消除list的原点仅需margin:0即可达到最终效果；FIrefox需要设置`margin:0;padding:0以及list-style:none`

- CSS圆角：ie7以下不支持圆角


> IE FF 兼容性

[IE和FF的差异](http://www.cnblogs.com/gowhy/archive/2011/05/23/2054295.html)






> js延迟加载的方式有哪些？

    defer和async、动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack）、按需异步载入js




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




#### 说说严格模式的限制



> 严格模式主要有以下限制：

```
    不能对只读属性赋值，否则报错

    对一个只设置了赋值器（getter）的属性赋值，会报错

    禁止扩展的对象不可扩展

    变量必须声明后再使用

    函数的参数不能有同名属性，否则报错

    不能使用with语句

    不能使用前缀0表示八进制数，否则报错( 从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6 进一步明确，要使用前缀0o表示 )

    不能删除不可删除的属性，否则报错

    不能删除变量delete prop，会报错，只有将描述对象configurable属性设置为true，才能被delete命令删除

    eval不会在它的外层作用域引入变量

    eval和arguments不能被重新赋值

    arguments不会自动反映函数参数的变化

    不能使用arguments.callee

    不能使用arguments.caller

    禁止this指向全局对象，会指向undefined

    不能使用fn.caller和fn.arguments获取函数调用的堆栈

   严格模式新增了一些保留字：implements, interface, let, package, private, protected, public, static, yield
```
详情：[《JavaScript 标准参考教程（alpha）》--严格模式](http://javascript.ruanyifeng.com/advanced/strict.html)


> 设立"严格模式"的目的，主要有以下几个：

```
    1.消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;

    2.消除代码运行的一些不安全之处，保证代码运行的安全；

    3.提高编译器效率，增加运行速度；

    4.为未来新版本的 Javascript 做好铺垫。
```


**注：** 经过测试`IE6,7,8,9`均不支持严格模式。ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。



> 测试是否开启严格模式


```js
var hasStrictMode = function() {
    "use strict";
    return this === undefined
}
````





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



> Infinity
```
无法使用 for/in 循环来枚举 Infinity 属性，也不能用 delete 运算符来删除它。
Infinity 不是常量，可以把它设置为其他值。
```


> js内存泄漏常见的四种情况

```
  1、意外的全局变量
  2、被遗忘的定时器或者回调
  3、没有清理的DOM元素引用
  4、闭包
```
> [详情见](https://segmentfault.com/a/1190000004896090)


> new Number(1) 结果不是 number 类型 但是 NaN、Infinity 是 number 类型



<h3 id="event">事件</h3>


[事件=>见](https://github.com/Aierui/jstraining/tree/master/node)

[案例](#5)


> Event Loop 原理

```
  主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）
```

![](./assets/event-loop.png)

> 上图中，主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在"任务队列"中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行那些事件所对应的回调函数。栈会记录所有的函数调用信息，堆则存放了大量的非结构化数据，譬如程序分配的变量与对象


*图/文* 来自阮一峰

[详情=>](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)


> [并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

> [JavaScript Event Loop 机制详解与 Vue.js 中实践应用](https://segmentfault.com/a/1190000011044242)


> preventDefault()、stopPropagation()、cancelBubble() 🏀



> js中__proto__和prototype的区别和关系？


[话题](https://www.zhihu.com/question/34183746)

<h3 id="javascript-algorithm">必会的小算法</h3>



> 实现一个forEach函数，即可遍历数组，也可以遍历对象

```js
  function forEach(obj, fn){
    var key;
    if (obj instanceof Array) {
      obj.forEach(function(item, index){
        fn(index, item)
      })
    }else{
      for(key in obj){
        if (obj.hasOwnProperty(key)) {
          fn(key, obj[key])
        }
      }
    }
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

> 50道经典面试题



> slice、concat、join、toString、map、every、filter 有什么异同？


<h3 id="ajax-and-json">AJAX和JSON</h3>


#### ajax的缺点和在IE下的问题？阐述创建ajax的过程


> Ajax 原理 具体来说，AJAX包括以下几个步骤。

```
  1、创建AJAX对象

  2、发出HTTP请求

  3、接收服务器传回的数据

  4、更新网页数据
```
![](https://sfault-image.b0.upaiyun.com/185/751/185751056-542272ebe29a8_articlex)


> ajax的缺点

```
    1、ajax不支持浏览器back按钮。

    2、安全问题 AJAX暴露了与服务器交互的细节。

    3、对搜索引擎的支持比较弱。

    4、破坏了程序的异常机制。

    5、不容易调试。
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
            //doing something
        }

    }
```


详情：[JavaScript学习总结（七）Ajax和Http状态字](http://segmentfault.com/blog/trigkit4/1190000000691919)





> `Flash`、`Ajax`各自的优缺点，在使用中如何取舍？

```
    Flash 适合处理多媒体、矢量图形、访问机器；对 CSS 、处理文本上不足，不容易被搜索。

    Ajax 对 CSS 、文本支持很好，支持搜索；多媒体、矢量图形、机器访问不足。

    共同点：与服务器的无刷新传递消息、用户离线和在线状态、操作DOM
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



> WEB 应用从服务器主动推送Data到客户端有那些方式？ Javascript数据推送

``` 
    Commet：基于HTTP长连接的服务器推送技术
      
    基于 WebSocket 的推送方案
      
    SSE （Server-Send Event）：服务器推送数据新方式
```

[话题](https://www.zhihu.com/question/24938934/answer/29567191)




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




> jQuery 和 zepto 异同？哪种更加适合？

```

```


> kebab-case、camelCase 两种命名的区别？

```js
camelCase: 骆驼式写法
kebab-case: 短横线命名


  var camelize = function(str){
    return str.replace(/-+(.)?/g, function(match, ch){
      console.log(match, ch)
      return ch ? ch.toUpperCase() : '';
    })
  } 
```

> 实现一个bind

```js


```



> [编程类详细见](main.js) 


