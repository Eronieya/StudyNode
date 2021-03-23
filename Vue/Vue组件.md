# Vue 组件

## 组件的组织

通常一个应用会以一棵嵌套的组件树的形式来组织：![Component Tree](https://cn.vuejs.org/images/components.png)

## 全局组件

​	可以在任意地方使用

## 局部组件

​	只在当前组件加载的时候才会加载局部组件

## 组件通信

### 父传子

通过 properties 自定义属性来通讯

​	子组件：
​			在子组件中声明 `props` 接收在父组件挂载的属性

​	父组件：
​			给父组件中 **子组件标签** 绑定自定义属性(使用v-bind)

```javascript
<script>
    	// 创建全局组件
        Vue.component('Child', {
            template: `
                <div>
                    <h3>我是一个子组件</h3>
                    <h4>{{ childData }}</h4>
                </div>
            `,
            props: ['childData']
        })

		// 创建局部组件
        const App = {
            data() {
                return {
                    msg:'我是父组件传进来的值'
                }
            },
            template: `
                <div>
                    <Child :childData = 'msg'> </Child>
                </div>
            `
        }
        
        new Vue({
            el: '#app',
            data: {

            },
            components: {
                // 挂载子组件
                App
            }
        })
    </script>
```



### 子传父

​	子组件：
​			在子组件事件函数中通过 `$emit()` 方法来触发父组件自定义事件

​	父组件：
​			给父组件中 子组件标签 绑定自定义事件

```javascript
<script>
        Vue.component('Child', {
            template: `
                <div>
                    <input type="text" @input='handleInput'/>
                </div>
            `,
            methods: {
                handleInput(e) {
                    const val = e.target.value;
					
                    // 出发父组件自定义事件
                    this.$emit('inputHandler', val);
                }
            }
        })

        const App = {
            data() {
                return {
                    msg:'我是父组件传进来的值',
                    newVal: ''
                }
            },
            template: `
                <div>
                    <div class='father'>
                        数据：{{ newVal }}
                    </div>

					<!-- 给子组件绑定自定义事件 -->
                    <Child @inputHandler='input'> </Child>
                </div>
            `,
            methods: {
                input(newVal) {
                    this.newVal = newVal;
                }  
            }
        }
        new Vue({
            el: '#app',
            data: {

            },
            components: {
                // 挂载子组件
                App
            }
        })
</script>
```

### 平行组件

​	中央事件总线, 即 new 一个 新的 Vue对象

​	使用 `$on(funcName, func) ` 绑定事件

​	使用 `$emit(funcName, args...)`  触发事件

### 其他通信

#### 父传子(provide & inject)

​	父组件 通过 `provide(){ return{} }` 提供变量

​	子组件 通过 `inject:[]`  注入变量，直接使用

#### 父传子($parent)

​	子组件通过 `this.$parent.propety` 获取变量

## 插槽

### 匿名插槽

### 具名插槽

### 作用域插槽

绑定在 `<slot>` 元素上的 attribute 被称为**插槽 prop**。现在在父级作用域中，我们可以使用带值的 `v-slot` 来定义我们提供的插槽 prop 的名字。 	

```javascript
// 子组件
template: `
<ul>
	<li v-for='item in todos' :key='item.id'>
		<slot :itemValue='item'></slot>
		{{ item.title }}
	</li>
</ul>
`
// 在子组件中绑定了 插槽prop
// 并在父组件中通过 v-slot 


//父组件
template:`
<todoList :todos='todoList'>
	<template v-slot='data'>
		<input type='checkbox' v-model='data.itemValue.isComplate'>
	</template>
</todoList>
`
```

​	使用场景：
​			原组件数据格式和引用接口不变，正常显示
​			新功能模块增加在原组件上

## 异步组件加载

以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。

### 全局注册

可以在工厂函数中返回一个 `Promise`

```javascript
Vue.component('async-webpack-example',
  // 这个动态导入会返回一个 `Promise` 对象。
  () => import('./my-async-component')
)
```



### 局部注册

当使用 局部注册 的时候，可以直接提供一个返回 `Promise` 的函数

```javascript
new Vue({
  // ...
  components: {
    'my-component': () => import('./my-async-component')
  }
})
```

