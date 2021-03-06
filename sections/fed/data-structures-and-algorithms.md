
<h2 id="2.1">数据结构和算法</h2>


> 简介

数据结构和算法贯穿于编程的每个角落，前端开发也不例外。虽然我们的工作集中在界面交互上，数据结构和算法的使用场景看似不多，其实不知不觉我们在使用。

- HTML文档本身就是一个棵树，DOM定义了操作这棵树的标准接口，jQuery在标准的DOM API的基础上提供了更好用的接口操作DOM树。

- JavaScript的Object本身就是一个hashmap。

- JSON的数据的序列化和反序列化设计字符串处理的相关算法。

- 前端模版引擎宋昌会利用一些词法分析算法去完成模版的解析和渲染

- Facebook的React在渲染DOM过程中就采用了Diff算法。

- 数据图表类应用会涉及多种数据算法的应用。

- 浏览器底层综合利用了多种数据结构和算法才将我们产出的HTML，CSS绘制成用户可见的页面




> 实现一个函数，输入一个字符串，检验是否为合法的JSON字符串。如果不合法，标出第一处不符合规则的字符的index和该字符。

  判断一个JSON结构是否非法时很简单的，捕捉JSON.parse的异常即可。但要知道index，需要有类似语法分析的流程


> 排序算法的时间开销主要可用算法执行中的**数据比较次数**和**数据移动次数**来衡量

**时间开销**
  排序的时间开销可用算法执行中的数据比较次数与数据移动次数来衡量。 算法运行时间代价的大略估算一般都按平均情况进行估算。对于那些受对象排序码序列初始排列及对象个数影响较大的，需要按最好情况和最坏情况进行估算

**空间开销**
  算法执行时所需的附加存储。



> 线性表的链式存储结构一定优于顺序存储结构吗？为什么？


**顺序表的特点**

  顺序表的特点是逻辑上相邻的数据元素，物理存储位置也相邻，并且，顺序表的存储空间需要预先分配。
  
- 优点：
      
    - 方法简单，各种高级语言中都有数组，容易实现。

    - 不用为表示节点间的逻辑关系而增加额外的存储开销。

    - 顺序表具有按元素序号随机访问的特点。
  
- 缺点：
      
    - 在顺序表中做插入、删除操作时，平均移动表中的一半元素，因此对n较大的顺序表效率低。

    - 需要预先分配足够大的存储空间，估计过大，可能会导致顺序表后部大量闲置；预先分配过小，又会造成溢出。




**链表的特点**

  在链表中逻辑上相邻的数据元素，物理存储位置不一定相邻，它使用指针实现元素之间的逻辑关系。并且，链表的存储空间是动态分配的。链表在**物理存储单元上**的存储结构： **非连续存储、非顺序存储**，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。

- 优点：

    - 比顺序存储结构的存储密度小(链式存储结构中每个结点都由数据域与指针域两部分组成，相比顺序存储结构增加了存储空间)。

    - 逻辑上相邻的节点物理上不必相邻。

    - 插入、删除灵活 (不必移动节点，只要改变节点中的指针)。

    - 每个结点是由数据域和指针域组成。

- 缺点：

    - 要占用额外的存储空间存储元素之间的关系，存储密度降低。存储密度是指一个节点中数据元素所占的存储单元和整个节点所占的存储单元之比。

    - 链表不是一种随机存储结构，不能随机存取元素。

    - 查找结点时链式存储要比顺序存储慢。


> 顺序表与链表的优缺点切好相反，那么在实践应用中怎样选取存储结构呢？通常有以下几点考虑：


顺序表的存储空间是静态分配的，在程序执行之前必须明确规定它的存储规模，也就是说事先对“MaxSize”要有合适的设定，设定过大会造成存储空间的浪费，过小造成溢出。**因此，当对线性表的长度或存储规模难以估计时，不宜采用顺序表。**

    
然而，链表的动态分配则可以克服这个缺点。链表不需要预留存储空间，也不需要知道表长如何变化，只要内存空间尚有空闲，就可以再程序运行时随时地动态分配空间，不需要时还可以动态回收。**因此，当线性表的长度变化较大或者难以估计其存储规模时，宜采用动态链表作为存储结构。**当线性表的长度变化不大而且事先容易确定其大小时，为节省存储空间，则采用顺序表作为存储结构比较适宜。


  
**基于运算的考虑（时间）**

  顺序存储是一种随机存取的结构，而链表则是一种顺序存取结构，因此它们对各种操作有完全不同的算法和时间复杂度。

  例如，要查找线性表中的第i个元素，对于顺序表可以直接计算出a(i)的的地址，不用去查找，其时间复杂度为0(1)。而链表必须从链表头开始，依次向后查找，平均需要0(n)的时间。所以，如果经常做的运算是按序号访问数据元素，显然顺表优于链表。

  反之，在顺序表中做插入，删除时平均移动表中一半的元素，当数据元素的信息量较大而且表比较长时，这一点是不应忽视的；在链表中作插入、删除，虽然要找插入位置，但操作是比较操作，从这个角度考虑显然链表优于顺序表。

  

**基于环境的考虑（语言）**

  顺序表容易实现，任何高级语言中都有数组类型；链表的操作是基于指针的。相对来讲前者简单些，也用户考虑的一个因素。

  总之，两种存储结构各有长短，选择哪一种由实际问题中的主要因素决定。通常“较稳定”的线性表，即主要操作是查找操作的线性表，适于选择顺序存储；而频繁做插入删除运算的（即动态性比较强）的线性表适宜选择链式存储。




> 栈和队列的区别?

  **队列先进先出，栈后进先出。**

  栈只允许在表尾一端进行插入和删除，而队列只允许在表尾一端进行插入，在表头一端进行删除


> 栈和堆的区别？

  **栈区（stack）**：由编译器自动分配释放，存放函数的参数值，局部变量的值等。// 系统自动分配,系统收回;

  **堆区（heap）** ：一般由程序员分配释放，若程序员不释放，程序结束时可能由OS回收。// 需要程序员自己申请

  **堆（数据结构）**：堆可以被看成是一棵树，如：堆排序；

  **栈（数据结构）**：一种后进先出的数据结构。

  栈是编译时分配空间，而堆是动态分配（运行时分配空间），所以栈的速度快



> 数组和链表的区别

  数组是将元素在内存中连续存放，由于每个元素占用内存相同，可以通过下标迅速访问数组中任何元素。但是如果要在数组中增加一个元素，需要移动大量元素，在内存中空出一个元素的空间，然后将要增加的元素放在其中。同样的道理，如果想删除一个元素，同样需要移动大量元素去填掉被移动的元素。如果应用需要快速访问数据，很少或不插入和删除元素，就应该用数组。


  链表恰好相反，链表中的元素在内存中不是顺序存储的，而是通过存在元素中的指针联系到一起。比如：上一个元素有个指针指到下一个元素，以此类推，直到最后一个元素。如果要访问链表中一个元素，需要从第一个元素开始，一直找到需要的元素位置。但是增加和删除一个元素对于链表数据结构就非常简单了，只要修改元素中的指针就可以了。如果应用需要经常插入和删除元素你就需要用链表数据结构了。


> 列出你所知道的排序算法名称。及其平均时间复杂度、空间复杂度

|名称|数据对象|稳定性|时间复杂度(平均)|时间复杂度(最好)|时间复杂度(最坏)|空间复杂度|描述 | 
|--------|-------|-------|----------|---------|--------|-------|----|
| 冒泡排序 | 数组 | ✅ | O(n<sup>2</sup>) |  O(n) | O(n<sup>2</sup>) | O(1)  | (无序区，有序区）。从无序区通过交换找出最大元素放到有序区前端 |
| 插入排序 | 数组、链表 |   ✅ | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n<sup>2</sup>) |  O(1)  |  （有序区，无序区）。把无序区的第一个元素插入到有序区的合适的位置。对数组：比较得少，换得多 | 
| 归并排序 | 数组、链表 |   ✅ | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(n) | 把数据分为两段，从两段中逐个选最小的元素移入新数据段的末尾。可从上到下或从下到上进行 | 
| 基数排序 | 数组、链表 |   ✅ | O(d(n+r))|  O(d(n+r)) |  O(d(n+r)) |  O(r) | 一种多关键字的排序算法，可用桶排序实现 | 
| 计数排序 | 线性表 | 稳定 | Ο(n+k)  |  |  |  | 非基于比较的排序算法| 
| 选择排序 | 数组、链表| 数组 ✅<br> 链表 ❌ |  O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n<sup>2</sup>) |  O(1)  |  (有序区，无序区）。在无序区里找一个最小的元素跟在有序区的后面。对数组：比较得多，换得少 | 
| 快速排序 | 数组  |  ❌ | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) |  O(n<sup>2</sup>) |  O(log<sub>2</sub>n)、O(n)  |  小数，枢纽元，大数
| 希尔排序 |  数组  |  ❌ | O(n<sup>1.3</sup>) | |  O(n<sup>2</sup>)  |  O(1) | 每一轮按照事先决定的间隔进行插入排序，间隔会依次缩小，最后一次一定要是1 | 
| 堆排序 | 数组  |  ❌ | O(nlogn) | O(nlogn) | O(nlogn) |  O(1) |  （最大堆，有序区）。从堆顶把根卸出来放在有序区之前，再恢复堆 | 



**堆排序**

- 1.堆排序的时间复杂度为O(nlogn)
- 2.整个构造堆的时间复杂度为O(n)
- 3.堆排序的空间复杂度为O(1)



##### Final

> 不断更新中…… 如果发现问题欢迎在 [issues](https://github.com/Aierui/web-develope-questions/issues) 中指出。如果有比较好的问题/知识点/指正，也欢迎提 PR。

