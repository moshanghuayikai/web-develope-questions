
# Reids设计与实现


- [Redis 设计与实现](https://www.kancloud.cn/kancloud/redisbook/63822)

- [Redis 数据结构和命令](http://blog.shijinrong.cn/a/17062301/)

### 简单动态字符串（SDS）

Redis只会使用C字符串作为字面量，在大多数情况下，Redis使用SDS（Simple Dynamic String，简单动态字符串）作为字符串表示。
比起C字符串，SDS具有以下优点：

- 常数复杂度获取字符串长度

- 杜绝缓冲区溢出

- 减少修改字符串长度时所需的内存重分配次数

- 二进制安全

- 兼容部分C字符串函数



### 链表

- 链表被广泛用于实现 Redis 的各种功能， 比如列表键， 发布与订阅， 慢查询， 监视器， 等等。

- 每个链表节点由一个 listNode 结构来表示， 每个节点都有一个指向前置节点和后置节点的指针， 所以 Redis 的链表实现是双端链表。

- 每个链表使用一个 list 结构来表示， 这个结构带有表头节点指针、表尾节点指针、以及链表长度等信息。

- 因为链表表头节点的前置节点和表尾节点的后置节点都指向 NULL ， 所以 Redis 的链表实现是无环链表。

- 通过为链表设置不同的类型特定函数， Redis 的链表可以用于保存各种不同类型的值。


### 字典

- 字典被广泛用于实现 Redis 的各种功能， 其中包括数据库和哈希键。

- Redis 中的字典使用哈希表作为底层实现， 每个字典带有两个哈希表， 一个用于平时使用， 另一个仅在进行 rehash 时使用。

- 当字典被用作数据库的底层实现， 或者哈希键的底层实现时， Redis 使用 MurmurHash2 算法来计算键的哈希值。

- 哈希表使用链地址法来解决键冲突， 被分配到同一个索引上的多个键值对会连接成一个单向链表。

- 在对哈希表进行扩展或者收缩操作时， 程序需要将现有哈希表包含的所有键值对 rehash 到新哈希表里面， 并且这个 rehash 过程并不是一次性地完成的， 而是渐进式地完成的。




### 跳跃表

- 跳跃表在Redis中只有两个地方用到，一是实现有序集合键，另一个是在集群节点中用作内部数据结构。

- Redis 的跳跃表实现由 zskiplist 和 zskiplistNode 两个结构组成， 其中 zskiplist 用于保存跳跃表信息（比如表头节点、表尾节点、长度）， 而 zskiplistNode 则用于表示跳跃表节点。

- 每个跳跃表节点的层高都是 1 至 32 之间的随机数。

- 在同一个跳跃表中， 多个节点可以包含相同的分值， 但每个节点的成员对象必须是唯一的。

- 跳跃表中的节点按照分值大小进行排序， 当分值相同时， 节点按照成员对象的大小进行排序。




### 整数集合

- 整数集合是集合键的底层实现之一。

- 整数集合的底层实现为数组， 这个数组以有序、无重复的方式保存集合元素， 在有需要时， 程序会根据新添加元素的类型， 改变这个数组的类型。

- 升级操作为整数集合带来了操作上的灵活性， 并且尽可能地节约了内存。

- 整数集合只支持升级操作， 不支持降级操作。




### 压缩列表

- 压缩列表是一种为节约内存而开发的顺序型数据结构。

- 压缩列表被用作列表键和哈希键的底层实现之一。

- 压缩列表可以包含多个节点，每个节点可以保存一个字节数组或者整数值。

- 添加新节点到压缩列表， 或者从压缩列表中删除节点， 可能会引发连锁更新操作， 但这种操作出现的几率并不高。




### 对象

在前面的数个章节里， 我们陆续介绍了 Redis 用到的所有主要数据结构， 比如简单动态字符串（SDS）、双端链表、字典、压缩列表、整数集合， 等等。

Redis 并没有直接使用这些数据结构来实现键值对数据库， 而是基于这些数据结构创建了一个对象系统， 这个系统包含字符串对象、列表对象、哈希对象、集合对象和有序集合对象这五种类型的对象， 每种对象都用到了至少一种我们前面所介绍的数据结构。

通过这五种不同类型的对象， Redis 可以在执行命令之前， 根据对象的类型来判断一个对象是否可以执行给定的命令。 使用对象的另一个好处是， 我们可以针对不同的使用场景， 为对象设置多种不同的数据结构实现， 从而优化对象在不同场景下的使用效率。

除此之外， Redis 的对象系统还实现了基于引用计数技术的内存回收机制： 当程序不再使用某个对象的时候， 这个对象所占用的内存就会被自动释放； 另外， Redis 还通过引用计数技术实现了对象共享机制， 这一机制可以在适当的条件下， 通过让多个数据库键共享同一个对象来节约内存。

最后， Redis 的对象带有访问时间记录信息， 该信息可以用于计算数据库键的空转时长， 在服务器启用了 maxmemory 功能的情况下， 空转时长较大的那些键可能会优先被服务器删除。
本章接下来将逐一介绍以上提到的 Redis 对象系统的各个特性。





- Redis 数据库中的每个键值对的键和值都是一个对象。

- Redis 共有字符串、列表、哈希、集合、有序集合五种类型的对象， 每种类型的对象至少都有两种或以上的编码方式， 不同的编码可以在不同的使用场景上优化对象的使用效率。

- 服务器在执行某些命令之前， 会先检查给定键的类型能否执行指定的命令， 而检查一个键的类型就是检查键的值对象的类型。

- Redis 的对象系统带有引用计数实现的内存回收机制， 当一个对象不再被使用时， 该对象所占用的内存就会被自动释放。

- Redis 会共享值为 0 到 9999 的字符串对象。

- 对象会记录自己的最后一次被访问的时间， 这个时间可以用于计算对象的空转时间。





### 数据库



- Redis 服务器的所有数据库都保存在 redisServer.db 数组中， 而数据库的数量则由 redisServer.dbnum 属性保存。

- 客户端通过修改目标数据库指针， 让它指向 redisServer.db 数组中的不同元素来切换不同的数据库。

- 数据库主要由 dict 和 expires 两个字典构成， 其中 dict 字典负责保存键值对， 而 expires 字典则负责保存键的过期时间。

- 因为数据库由字典构成， 所以对数据库的操作都是建立在字典操作之上的。

- 数据库的键总是一个字符串对象， 而值则可以是任意一种 Redis 对象类型， 包括字符串对象、哈希表对象、集合对象、列表对象和有序集合对象， 分别对应字符串键、哈希表键、集合键、列表键和有序集合键。

- expires 字典的键指向数据库中的某个键， 而值则记录了数据库键的过期时间， 过期时间是一个以毫秒为单位的 UNIX 时间戳。

- Redis 使用惰性删除和定期删除两种策略来删除过期的键： 惰性删除策略只在碰到过期键时才进行删除操作， 定期删除策略则每隔一段时间， 主动查找并删除过期键。

- 执行 SAVE 命令或者 BGSAVE 命令所产生的新 RDB 文件不会包含已经过期的键。

- 执行 BGREWRITEAOF 命令所产生的重写 AOF 文件不会包含已经过期的键。

- 当一个过期键被删除之后， 服务器会追加一条 DEL 命令到现有 AOF 文件的末尾， 显式地删除过期键。

- 当主服务器删除一个过期键之后， 它会向所有从服务器发送一条 DEL 命令， 显式地删除过期键。

- 从服务器即使发现过期键， 也不会自作主张地删除它， 而是等待主节点发来 DEL 命令， 这种统一、中心化的过期键删除策略可以保证主从服务器数据的一致性。

- 当 Redis 命令对数据库进行修改之后， 服务器会根据配置， 向客户端发送数据库通知。






### RDB 持久化

- RDB 文件用于保存和还原 Redis 服务器所有数据库中的所有键值对数据。

- SAVE 命令由服务器进程直接执行保存操作，所以该命令会阻塞服务器。

- BGSAVE 命令由子进程执行保存操作，所以该命令不会阻塞服务器。

- 服务器状态中会保存所有用 save 选项设置的保存条件，当任意一个保存条件被满足时，服务器会自动执行 BGSAVE 命令。

- RDB 文件是一个经过压缩的二进制文件，由多个部分组成。

- 对于不同类型的键值对， RDB 文件会使用不同的方式来保存它们。



### AOF 持久化


- AOF 文件通过保存所有修改数据库的写命令请求来记录服务器的数据库状态。

- AOF 文件中的所有命令都以 Redis 命令请求协议的格式保存。

- 命令请求会先保存到 AOF 缓冲区里面， 之后再定期写入并同步到 AOF 文件。

- appendfsync 选项的不同值对 AOF 持久化功能的安全性、以及 Redis 服务器的性能有很大的影响。

- 服务器只要载入并重新执行保存在 AOF 文件中的命令， 就可以还原数据库本来的状态。

- AOF 重写可以产生一个新的 AOF 文件， 这个新的 AOF 文件和原有的 AOF 文件所保存的数据库状态一样， 但体积更小。

- AOF 重写是一个有歧义的名字， 该功能是通过读取数据库中的键值对来实现的， 程序无须对现有 AOF 文件进行任何读入、分析或者写入操作。

- 在执行 BGREWRITEAOF 命令时， Redis 服务器会维护一个 AOF 重写缓冲区， 该缓冲区会在子进程创建新 AOF 文件的期间， 记录服务器执行的所有写命令。 当子进程完成创建新 AOF 文件的工作之后， 服务器会将重写缓冲区中的所有内容追加到新 AOF 文件的末尾， 使得新旧两个 AOF 文件所保存的数据库状态一致。 最后， 服务器用新的 AOF 文件替换旧的 AOF 文件， 以此来完成 AOF 文件重写操作。




### 事件

- Redis 服务器是一个事件驱动程序， 服务器处理的事件分为时间事件和文件事件两类。

- 文件事件处理器是基于 Reactor 模式实现的网络通讯程序。

- 文件事件是对套接字操作的抽象： 每次套接字变得可应答（acceptable）、可写（writable）或者可读（readable）时， 相应的文件事件就会产生。

- 文件事件分为 AE_READABLE 事件（读事件）和 AE_WRITABLE 事件（写事件）两类。

- 时间事件分为定时事件和周期性事件： 定时事件只在指定的时间达到一次， 而周期性事件则每隔一段时间到达一次。

- 服务器在一般情况下只执行 serverCron 函数一个时间事件， 并且这个事件是周期性事件。

- 文件事件和时间事件之间是合作关系， 服务器会轮流处理这两种事件， 并且处理事件的过程中也不会进行抢占。

- 时间事件的实际处理时间通常会比设定的到达时间晚一些。






### 客户端

- 服务器状态结构使用 clients 链表连接起多个客户端状态， 新添加的客户端状态会被放到链表的末尾。

- 客户端状态的 flags 属性使用不同标志来表示客户端的角色， 以及客户端当前所处的状态。

- 输入缓冲区记录了客户端发送的命令请求， 这个缓冲区的大小不能超过 1 GB 。

- 命令的参数和参数个数会被记录在客户端状态的 argv 和 argc 属性里面， 而 cmd 属性则记录了客户端要执行命令的实现函数。

- 客户端有固定大小缓冲区和可变大小缓冲区两种缓冲区可用， 其中固定大小缓冲区的最大大小为 16 KB ， 而可变大小缓冲区的最大大小不能超过服务器设置的硬性限制值。

- 输出缓冲区限制值有两种， 如果输出缓冲区的大小超过了服务器设置的硬性限制， 那么客户端会被立即关闭； 除此之外， 如果客户端在一定时间内， 一直超过服务器设置的软性限制， 那么客户端也会被关闭。

- 当一个客户端通过网络连接连上服务器时， 服务器会为这个客户端创建相应的客户端状态。 网络连接关闭、 发送了不合协议格式的命令请求、 成为 CLIENT_KILL 命令的目标、 空转时间超时、 输出缓冲区的大小超出限制， 以上这些原因都会造成客户端被关闭。

- 处理 Lua 脚本的伪客户端在服务器初始化时创建， 这个客户端会一直存在， 直到服务器关闭。

- 载入 AOF 文件时使用的伪客户端在载入工作开始时动态创建， 载入工作完毕之后关闭。



### 服务端


- 一个命令请求从发送到完成主要包括以下步骤： 1. 客户端将命令请求发送给服务器； 2. 服务器读取命令请求，并分析出命令参数； 3. 命令执行器根据参数查找命令的实现函数，然后执行实现函数并得出命令回复； 4. 服务器将命令回复返回给客户端。

- serverCron 函数（负责管理服务器资源，并保持服务器自身良好运转）默认每隔 100 毫秒执行一次， 它的工作主要包括更新服务器状态信息， 处理服务器接收的 SIGTERM 信号， 管理客户端资源和数据库状态， 检查并执行持久化操作， 等等。

- 服务器从启动到能够处理客户端的命令请求需要执行以下步骤： 1. 初始化服务器状态； 2. 载入服务器配置； 3. 初始化服务器数据结构； 4. 还原数据库状态； 5. 执行事件循环。







