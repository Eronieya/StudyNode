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

### v-model语法糖

```vue
<input v-model="message" />
// 等同于
<input 
       v-bind:value="message"
       v-on:input="message=$event.target.value"
       />
```



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

```vue
<template>
    <view class="master__tabbar flex-row-between-center">
        <view class="item" v-for="index in 3" :key="index"
              :class="masterIndex + 1 == index ? 'master__tabbar--active' : ''" @click="changeMaster(index)">
            <!-- 过滤器的使用 -->
            <text>大师模板{{ index | cnNum }}</text>
        </view>
        <view class="under-line"></view>
    </view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			
		},
		methods: {
			/* 
			 * 获取线的位置(此方法依赖document对象, 进行了DOM操作)
			 */
			initLinePos() {
				let startX = 0;
				for (let i = 0; i < 3; i++) {
					let item = document.querySelector(`.item:nth-child(${i+1})`).getBoundingClientRect();
					if (i == 0) startX = item.x;
					this.linePos.push(item.x - startX + (item.width / 2));
				}
				this.lineDom = document.querySelector('.under-line');
				this.lineDom.style.left = this.linePos[0];
				console.log('this.linePos', this.linePos);
			},
		},
        mounted() {
			this.initLinePos();
		},
		filters: {
			cnNum(num) {
				let result = '';
				switch (num) {
					case 1:
						result = '一';
						break;
					case 2:
						result = '二';
						break;
					case 3:
						result = '三';
						break;
					default:
						break;
				}
				return result;
			}
		}
	}
</script>
```

# 自定义指令

```vue
<template>
	...
	<input v-focus>
</template>

<script>
directives: {
	focus: {
		inserted: function(el){
			el.focus();
		}
	}
}
</script>
```



## 钩子函数

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用（仅保证父节点存在，但不一定背插入文档中）。
- `update`：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新。
- `componentUpdated`：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

## 钩子函数参数

- `el`：指令所绑定的元素，可以用来直接操作 DOM。
- `binding`：一个对象，包含以下 property：
  - `name`：指令名，不包括 `v-` 前缀
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为`2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和  `componentUpdated` 钩子中可用。无论值是否改变都可用
  - `expression`：字符串形式的指令表达式。例如`v-my-directive="1 + 1"`中，表达式为`"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如`v-my-directive:foo`中，参数`"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如`v-my-directive.foo.bar`中，修饰符对象为`{foo: true, bar: true}`。
- `vnode`：Vue编译生成的虚拟节点。
- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

