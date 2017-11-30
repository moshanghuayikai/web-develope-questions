# C语言基础


```c
#include <stdio.h>

int main(void)
{
    printf("Hello, world!\n");
    puts("Hello, world!"); /* 等同于上一条语句 */
        
    return 0; /* 返回零以表示成功 */
}
```



## 数据类型

### 基础数据类型

注意：以下是典型的数据位长和范围。编译器可能使用不同的数据位长和范围。请参考具体的参考手册。
在标准头文件[limits.h](https://docs.segmentfault.com/c/types/limits) 和 [float.h](https://docs.segmentfault.com/c/types/limits#Limits_of_floating_point_types)中说明了基础数据的长度。float，double和long double的范围就是在[IEEE 754](https://zh.wikipedia.org/wiki/IEEE_754)标准中提及的典型数据



关键字 | 	 位长(字节)	|  范围 | 格式化字符串
----|-----|------|----
char	| 1 bytes	| -128..127（或0..255，与体系结构相关）	|  %c
unsigned char	| 1bytes	| 0..255	|  %c, %hhu
signed char	| 1bytes	| -128..127	|  %c, %hhd, %hhi
int	| 2bytes(16位系统) 或 4bytes	| -32768..32767 或 -2147483648..2147483647	|  %i, %d
unsigned int	| 2bytes 或 4 bytes	| 0..65535 或 0..4294967295	|  %u
signed int	| 2bytes 或 4bytes	| -32768..32767 或 -2147483648..2147483647	|  %i, %d
short int	| 2bytes	| -32768..32767	|  %hi, %hd
unsigned short	| 2 bytes	| 0..65535	|  %hu
signed short	| 2bytes	| -32768..32767	|  %hi, %hd
long int	| 4bytes 或 8bytes[7]	| -2147483648..2147483647 或 -9223372036854775808..9223372036854775807	|  %li, %ld
unsigned long	| 4bytes 或 8 bytes	| 0..4294967295 或 0..18446744073709551615	|  %lu
signed long	| 4 bytes或 8bytes	| -2147483648..2147483647 或 -9223372036854775808..9223372036854775807	|  %li, %ld
long long	| 8bytes	| -9223372036854775808..9223372036854775807	|  %lli, %lld
unsigned long long	| 8bytes	| 0..18446744073709551615	|  %llu
float	| 4bytes	| 2.939x10−38..3.403x10+38 (7 sf)	|  %f, %e, %g
double	| 8bytes	| 5.563x10−309..1.798x10+308 (15 sf)	|  %lf, %e, %g
long double	| 10bytes或 16bytes	| 7.065x10-9865..1.415x109864 (18 sf或33 sf)	|  %Lf, %Le, %Lg



### 结构数据类型


结构数据类型允许构造由多个基础数据类型组合而成的复杂结构，结构数据类型为面向对象的蓝本。以下的结构数据类型通过指针实现了二叉树结构：

```c
typedef struct Bintree {
  int data;
  struct bintree *lchild; // left child of the node
  struct bintree *rchild; // right child of the node
} bintree; // 自定义 bintree 类型
```



为结构数据类型定义变量时通常会用到动态内存分配：

```c
#define mktree() (bintree *)malloc(sizeof(bintree)) // 分配该结构所需的内存单元数量
bintree *tree;
tree = mktree(); // 分配到 tree 指针
tree->data = 1;
tree->lchild = mktree();
...
```


由于C语言不具备自动垃圾收集（Garbage Collection）功能，使用完毕后调用free(treePtr)来释放之前通过malloc(size)分配的内存。详见以下指针章节。




## 数组

如果一个变量名后面跟着一个有数字的中括号，这个声明就是数组声明。

字符串也是一种数组，它们以ASCII的NUL作为数组的结束。要特别注意的是，方括内的索引值是从0算起的。


例如：

```c
int myvector [100]；/* 從myvector[0]至[99]共100個元素 */
char mystring [80]；
// 声明时初始化
float mymatrix [3] [2] = {2.0 , 10.0, 20.0, 123.0, 1.0, 1.0};
int notfull [3][3] = {{1},{1,2,3},{4,5}};
// 数组套数组
char lexicon [10000] [300]；/* 共一萬個最大長度為300的字元陣列。*/
int a[3][4]；
```

上面最后一个例子创建了一个数组，但也可以把它看成是一个多维数组。注意数组的下标从0开始。这个数组的结构如下：


```c
a[0][0]	a[0][1]	a[0][2]	a[0][3]
a[1][0]	a[1][1]	a[1][2]	a[1][3]
a[2][0]	a[2][1]	a[2][2]	a[2][3]
```

例子中notfull创建了一个3*3的二维数组，初始化时有些元素并未赋值。如下：
```
1  ?  ?
1  2  3
4  5  ?
```


根据C标准的规定，在存在初始化列表时，如果初始化列表中未提供对所有元素的初始化，则剩余元素会被默认初始化，并使用与静态变量相同的初始化规则。



## 函数

C语言的基本结构单位是函数。系统首先调用 main函数（主函数），通过函数的嵌套调用，再调用其他函数。函数可以是系统自带的函数，也可以是用户定义的函数。C语言中，不允许函数嵌套定义。


- [主函数（main function）](https://zh.wikipedia.org/wiki/%E4%B8%BB%E5%87%BD%E5%BC%8F#C.2FC.2B.2B)


## 指针


如果一个变量声明时在前面使用 * 号，表明这是个指针型变量。换句话说，该变量存储一个地址，而 *（此处特指单目运算符 *，下同。C语言中另有双目运算符 * 表示乘） 则是取内容操作符，意思是取这个内存地址里存储的内容。把这两点结合在一起，可将 int *a;看作是 “*a 解得的内容类型为 int”，对更复杂的声明也如此。指针是 C 语言区别于其他同时代高级语言的主要特征之一。


指针不仅可以是变量的地址，还可以是数组、数组元素、函数的地址。通过指针作为形式参数可以在函数的调用过程得到一个以上的返回值（不同于return z这样的仅能得到一个返回值。


指针是一把双刃剑，许多操作可以通过指针自然的表达，但是不正确的或者过分的使用指针又会给程序带来大量潜在的错误。

例如：

```
int *pi;     // 指向整型数据的指针 pi
int * api[3];// 由指向整型数据的指针构成的数组，长度为 3
char ** argv;// 指向一个字符指针的指针
struct { int member; } stinst,
  * pst = & stinst;
// pst是一个指向一个匿名结构体的指针
```


储存在指针中的地址所指向的数值在程序中可以由 * 读取。

例如，在第一个例子中， *pi 是一个整型数据。这叫做引用一个指针。


另一个运算符 &，叫做取地址运算符，它将返回一个变量、数组或函数的存储地址。因此，下面的例子：

```
int i, *pi; /* int and pointer to int */
pi = &i;
```


i 和 *pi 在程序中可以相互替换使用，直到 pi 被改变成指向另一个变量的地址。
当指针指向结构体时，可以使用运算符 -> 代替 *和. 的作用，如 (*p).m 与 p->m 等效。



## 结构化化数据

## 文件处理

在C语言中，输入和输出是经由标准库中的一组函数来实现的。在ANSI/ISO C中，这些函数被定义在头文件stdio.h中。

标准输入／输出

有三个标准输入／输出是标准I/O库预先定义的：

stdin 标准输入
stdout 标准输出
stderr 输入输出错误


下面的这个例子显示了一个过滤程序（filter program）是怎样构成的。

```c
#include <stdio.h>

int main(int argc, const char * argv[])
{
    char c;
    while ((c=getchar())!=EOF)
        putchar(c);
    perror("getchar() got EOF");
    return -1;
}
```


## 内存管理

C语言的特色之一是：程序员必须亲自处理内存的分配细节。

C语言使用栈（Stack）来保存函数返回地址／栈帧基址、完成函数的参数传递和函数局部变量的存储。 如果程序需要在运行的过程中动态分配内存，可以利用堆（Heap）来实现。

基本上C程序的元素存储在内存的时候有3种分配策略：


**静态分配**

如果一个变量声明为全局变量或者是函数的静态变量，这个变量的存储将使用静态分配方式。静态分配的内存一般会被编译器放在数据段或代码段来存储，具体取决于实现。这样做的前提是，在编译时就必须确定变量的大小。 以IA32的x86平台及gcc编译器为例，全局及静态变量放在数据段的低端；全局及静态常量放在代码段的高端。


**自动分配**

函数的自动局部变量应该随着函数的返回会自动释放（失效），这个要求在一般的体系中都是利用栈（Stack）来满足的。相比于静态分配，这时候，就不必绝对要求这个变量在编译时就必须确定变量的大小，运行时才决定也不迟，但是C89仍然要求在编译时就要确定，而C99放松了这个限制。但无论是C89还是C99，都不允许一个已经分配的自动变量运行时改变大小。

所以说C函数永远不应该返回一个局部变量的地址。

要指出的是，自动分配也属于动态分配，甚至可以用alloca函数来像分配堆（Heap）一样进行分配，而且释放是自动的。


**动态分配**

还有一种更加特殊的情况，变量的大小在运行时有可能改变，或者虽然单个变量大小不变，变量的数目却有很大弹性，不能静态分配或者自动分配，这时候可以使用堆（Heap）来满足要求。ANSI C定义的堆操作函数是malloc、calloc、realloc和free。
使用堆（Heap）内存将带来额外的开销和风险。



## 安全问题

C语言的特色之一是：语言不负责内存边界检查。


## 参考资料

- [C Programming Language](https://docs.segmentfault.com/c/)

- [C Programming Language](https://en.wikipedia.org/wiki/C_(programming_language) )



