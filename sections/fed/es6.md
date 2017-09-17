

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

详见：[ECMAScript 6 入门](http://es6.ruanyifeng.com/)

> [ES6 图解](https://github.com/Aierui/es6)

> ES6 模块与 CommonJS 模块的差异

```
  两个重大差异

  第一个差异
      CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用

      CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

      CommonJS 一旦输出一个值，模块内部的变化就影响不到这个值


  第二个差异
      CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成

      ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成
```


> CommonJS模块的特点如下

```
  所有代码都运行在模块作用域，不会污染全局作用域。

  模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
  
  模块加载的顺序，按照其在代码中出现的顺序。
```



> AMD 和 CommonJS 的使用场景

```
  需要异步加载js，使用AMD

  使用了npm之后建议使用CommonJS
```


> 对前端模块化的认识

```
    AMD (Asynchronous Module Definition) 即异步模块加载机制 
      是 RequireJS 在推广过程中对模块定义的规范化产出。

    CMD (Common Module Definition) 
      是 SeaJS 在推广过程中对模块定义的规范化产出。

    AMD  是提前执行，CMD 是延迟执行。

    AMD 推荐的风格通过返回一个对象做为模块对象， CommonJS 的风格通过对 module.exports 或 exports 的属性赋值来达到暴露模块对象的目的。

    Common.js 多采用服务端开发

```



推荐: [AMD规范与CMD规范介绍](http://blog.chinaunix.net/uid-26672038-id-4112229.html)


> CMD模块方式


```js
    define(function(require, exports, module) {

      // 模块代码

    });
```



<h4 id="Promise">Promise</h4>



#### 说说你对 Promise 的理解

> Promises的写法

```
// 
(new Promise(step1))
  .then(step2)
  .then(step3)
  .then(step4);
```


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


> Promise.then 是异步执行的，而创建 Promise 实例 （executor） 是同步执行的，譬如下述代码

```js
  (function test() {
      setTimeout(function() {console.log(4)}, 0);
      new Promise(function executor(resolve) {
          console.log(1);
          for( var i=0 ; i<10000 ; i++ ) {
              i == 9999 && resolve();
          }
          console.log(2);
      }).then(function() {
          console.log(5);
      });
      console.log(3);
  })()

  // 输出结果为：
  // 1
  // 2
  // 3
  // 5
  // 4

```


