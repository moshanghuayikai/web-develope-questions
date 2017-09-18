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
  module 和 exports 都是模块文件的上下文，更确切地讲，模块文件的代码真正被执行的是被包装过的，比如：
  
  一旦 require 函数准备完毕，整个所要加载的脚本内容，就被放到一个新的函数之中，这样可以避免污染全局环境。该函数的参数包括 require、module、exports，以及其他一些参数。

  (function(exports, require, module, __filename, __dirname){//包装头
    console.log("hello world!")//原始文件内容
  })//包装尾

  module 和 exports 都是模块被执行时的参数。其中 exports 也是 module 的属性，默认情况下是一个空对对象。

  当 require 一个模块时，实际上得到的是该模块的exports属性。

  在非repl模式下可以得到验证：

  console.log(module.exports === exports); //true

  console.log(exports); //{}
```




> es6 的export、import
```js
  export {name1,name2, …,nameN};
  export {variable1asname1,variable2asname2, …,nameN};
  export let name1,name2, …,nameN; // also var
  export let name1= …,name2= …, …,nameN; // also var, const

  export expression;
  export default expression;
  export default function (…) { … } // also class, function*
  export default function name1(…) { … } // also class, function*
  export {name1as default, … };

  export * from …;
  export {name1,name2, …,nameN} from …;
  export {import1asname1,import2asname2, …,nameN} from …;

  import defaultMember from "module-name";
  import * as name from "module-name";
  import { member } from "module-name";
  import { member as alias } from "module-name";
  import { member1 , member2 } from "module-name";
  import { member1 , member2 as alias2 , [...] } from "module-name";
  import defaultMember, { member [ , [...] ] } from "module-name";
  import defaultMember, * as name from "module-name";
  import "module-name";
```



> Node.js在执行 require(id) 时是怎样找到一个模块的？（ require 加载规则 ）

```
  Node.js中的require(id)执行分3种情况：引入内建模块、引入文件模块、引入一个包。

  通过id可以分析得到该模块是一个内建模块、文件模块还是包

  若是内建模块时，直接从内存中加载

  
  当id是相对路径或绝对路径时，模块被认为是一个文件模块，通过文件查找可以定位到文件的路径。


  当id既不是内建模块也不是文件模块时，则被认为是一个包。这个包可能通过npm安装的第三方模块。

  包的加载方式为，从当前路径下寻找node_modeules目录中是否存在该包。如果没有，想上一级目录进行查找，

  知道根目录下的 node_modules。这个规则可以通过 module.paths 得到。


  寻找到包后，寻找包的描述文件 pageage.json ，该文件的 main 字段表明了这个包的入口文件，

  此时再按文件的方式找到对应文件即可。

  （目前自动加载扩展名可省略类型 .js、.json、.node ）

  .node文件在不同的平台下内容不同，在Windows下其实是.dll文件，其他平台下是.so文件

```





> 能否使用require('.json')的方式加载大量的JSON文件？

```
  Node.js 中推崇非阻塞 I/O ,但是 require 一个模块时确实同步调用的，这会带来性能上的开销，但并不是每次 require 都很耗时

  因为在 require 成功之后会缓存起来，再次加载时直接从缓存读取，并没有额外开销。

  当通过 .json 的方式加载文件时固然方便，但大量使用时会导致这些数据被缓存，大量数据驻留在内存中，导致GC频繁和内存泄露。

```




> Node.js中的异步I/O是如何进行的？

```
  Node.js 的异步 I/O 通过时间循环的方式实现。其中异步 I/O 又分 磁盘I/O 和 网络I/O。

  在磁盘I/O 的调用中，当发起异步调用后，会将异步操作送进 libuv 提供的队列中，然后返回。

  在磁盘I/O 执行完成之后，会形成一个事件，事件循环的过程总发现该事件后，会将其消费。

  消费过程就是将得到的数据和传入的回调函数执行。

  
  网络I/O 与 磁盘I/O 的差异在于他不需要线程池来进行处理，而是在每次事件循环的过程中通过

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


> setTimeOut()

> process.nextTick()

> setImmediate();



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

