
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
![unit_tests.png](./assets/unit_tests.png)

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




> ES6 特性？

```

```


> webpack 有两个 entry 怎么做？

```

```


> webpack 基本配置信息？

```

```

英文官方文档 [http://webpack.github.io/docs](http://webpack.github.io/docs)
中文官方文档 [https://doc.webpack-china.org](https://doc.webpack-china.org)

案例 [webpack-demos](https://github.com/ruanyf/webpack-demos)


> webpack 与 grunt 的区别？

```


```





##### Final

> 不断更新中…… 如果发现问题欢迎在 [issues](https://github.com/Aierui/web-develope-questions/issues) 中指出。如果有比较好的问题/知识点/指正，也欢迎提 PR。


