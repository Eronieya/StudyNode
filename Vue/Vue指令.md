# Vue 指令总结

## v-text 和 v-html

- v-text：元素的innerText属性
- v-html：元素的innerHTML

## 条件渲染

### v-if 、v-else-if 、v-else 

​	当条件为 false 的时候，元素不会被渲染在页面上。

### v-show

​	当条件为 false 的时候，只是加上了 display: none; 样式，元素总是会被渲染。

## v-bind

​	绑定属性

​	v-bind 作用在 HTML attribute 上。

​	v-bind 可以简写成 ' : '

## v-on

​	v-on 用于监听 DOM 事件。

​	v-on 可以简写成 '@'

### 事件修饰符

- .stop 阻止单击事件继续传播
- .prevent 提交事件不再重载页面
- .capture
- .self
- .once 事件将只会触发一次
- .passive

### 按键修饰符

- .enter
- .tab
- .delete (捕获“删除”和“退格”键)
- .esc
- .space
- .up
- .down
- .left
- .right

### 系统修饰符

- .ctrl
- .alt
- .shift
- .meta

### 鼠标修饰符

- .left
- .right
- .middle

## 列表渲染

### v-for

​	用于遍历 数组 和 对象 的值

### 维护状态

​	为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` attribute。

​	就是说当 数组/对象 中数据更新的时候，如果没提供 ` key ` 则 vue 会更新整个列表。如果提供了 `key` 则 vue 会根据 `key` 值追踪当前节点并对其进行更新修改项。

## 双向数据绑定

### v-model

## 侦听器 watch

一般数据类型监视

```javascript
watch: {
	// key 为 data 对象的属性名
	key: function(newV, oldV) {
		console.log(newV, oldV);
	}
}
```

深度监视： Object | Array

```javascript
watch: {
	// obj 为对象名
	obj: {
		deep: 'true',
		handler: function(newV, oldV) {	
			console.log(newV, oldV)
		}
	}
}
```



## 计算属性

​	computed:{}
​	计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 `message` 还没有发生改变，多次访问 `reversedMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数。

​	最大的优点：产生缓存

## 过滤器

​	filters: {}	// 局部过滤器

​	Vue.filter(name, (val)=> {})	// 全局过滤器

