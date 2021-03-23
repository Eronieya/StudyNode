# ES6

## Babel 转码器

​	Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码。

​	安装 Babel  `$ npm install --save-dev @babel/core`

​	Babel 得配置文件是 `.babelrc` 存放在项目的根目录下。

## let 和 const 命令

​	var 命令声明的，在全局范围内都有效。

- 不存在变量提升
- 暂时性死区 (temporal dead zone, TDZ)



# Vue

## Mixin 混入

## EventBus 事件总线

​	`$emit` `$on` 通过 触发事件 以及 注册挂载事件

## vuex 状态管理架构(store)

### state

​	从 store 实例中读取状态最简单的方法就是在`计算属性 (opens new window)`中返回某个状态

### getter

​	Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

### mutations

​	每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**。

​	唤醒一个 mutation handler 通过 **`store.commit`** 方法

​	提交载荷 传入额外的参数(载荷 payload)

### actions 

- Action 提交的是 mutation，而不是直接变更状态
- Action 可以包含任意异步操作

​	分发 Action 通过 **`store.dispatch`** 方法触发

### modules

​	Vuex 允许我们将 store 分割成**模块（module）**。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块



# JavaScript

## for ... in (of) ... 区别

