### Vue双向绑定

##### 实现和原理

设计模式

1. 数据劫持（proxy模式）
2. 发布者 - 订阅者模式



实现方式

- Vue2  `Object.defineProperty`
- Vue3  `ES6原生 Proxy`



##### 回答描述

双向绑定是使用了 代理模式 和 发布 - 订阅者模式 两种设计模式进行设计的。 
双向绑定在 Vue2 和 Vue3 是使用了不同的方式实现的。
在 Vue2 使用了 `Object.defineProperty()` 来劫持各个属性的 setter 和 getter。
在 Vue3 使用了 `ES6 proxy`
双向绑定的思路是
首先需要observe的数据对象进行递归遍历，然后设置getter和setter，每当该对象的属性值改变了，就会触发对应的setter。
然后Compile解析模版指令，将模版中的变量换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，变量改变就会更新视图。
Watcher订阅者是Observer和Compile之间通讯的桥梁。




##### 问题点：

1. ES6 原生 Proxy
1. Watcher订阅者的实现

