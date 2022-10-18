# VueX

## 为什么要使用 VueX

Vuex 是专门为 Vue.js 设计的**状态管理库**，它采用**集中式存储**管理应用的所有组件的状态。而更改状态的唯一方法是提交mutation。

![img](https://images2017.cnblogs.com/blog/716127/201801/716127-20180119171334615-850491038.png)

## **VueX解决了什么问题**

- 多个组件依赖同一状态时，对于多层嵌套的组件的传值将会非常繁琐，并且对于兄弟组件间的状态传递无能为力
- 来自不同组件的行为需要变更同一状态。以往采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

## **使用VueX的场景**

- 多个组件依赖于同一状态时。
- 来自不同组件的行为需要变更同一状态

## VueX的核心属性

state 、 getters、 mutations、 actions、 modules

### state

VueX状态存储在state中，改变Vuex中的状态的唯一途径是显式地提交 mutation

当VueX中状态是对象时，复制后改变属性还是会影响原始数据，这样会改变state里面的状态，是不允许的。所以先用 深拷贝对对象进行拷贝，在修改。



```js
computed: {
  localComputed () { /* ... */ },
  // 使用对象展开运算符将此对象混入到外部对象中
  ...mapState({
    // ...
  })
}
```

`mapState` 函数返回的是一个对象。我们如何将它与局部计算属性混合使用呢？通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 `computed` 属性。但是自从有了[对象展开运算符 (opens new window)](https://github.com/tc39/proposal-object-rest-spread)，我们可以极大地简化写法

### getters

```js
const state = {
    someState: {
        // some attributes...
    }
}
```

从 store 中的 state 中派生出一些状态，对某些数据进行过滤

### mutations

```js
const mutations = {
    CHANGE_STATE: (state, param) => {
        state.someState = param
    }
}
```

更改 store 中的状态的唯一方法是提交 mutation。

mutation 必须是同步函数。

### actions

```js
const actions = {
    someAction({commit, state}, param) {
        return new Promise((resolve, reject) => {
			setTimeout(() => {
                // do something...
                commit('someMutation', p1)
            }, 200)
        })
    }
}
```

actions 可以包含任意异步操作。

### module

带命名空间的绑定函数

```js
computed: {
    ...mapState({
        a: state => state.app.a,
        b: state => state.user.b
    })
},
methods: {
    ...mapActions('app', [
        'foo', // -> this.foo()
        'bar' // -> this.bar()
    ])
}
```



### 辅助函数

1. mapState

   ```js
   computed: {
       // 把 `this.someState` 映射为 `this.$store.state.someState`
       ...mapState([
           'someState'
       ]),
       
       // 把 `this.someState` 映射为 `this.$store.state.alice`
       ...mapState({
           someState: 'alice'
       })
   }
   ```

2. mapGetters

   ```js
   computed: {
       // 把 `this.someState` 映射为 `this.$store.getter.someState`
       ...mapGetters([
           'someState'
       ]),
       
       // 把 `this.alice` 映射为 `this.$store.getter.someState`
       ...mapGetters({
           alice: 'someState'
       })
   }
   ```

3. mapMutations

   ```js
   methods: {
       ...mapMutations([
           'someMutation'
       ]),
           
       // 将 `this.john()` 映射为 `this.$store.commit('someMutation')`
       ...mapMutations({
           john: 'someMutation' 
       }),
   }
   ```

4. mapActions

   ```js
   methods: {
       ...mapActions([
           'someAction'
       ]),
           
       // 将 `this.john()` 映射为 `this.$store.dispatch('someMutation')`
       ...mapActions({
           john: 'someAction' 
       }),
   }
   ```



# vuex页面刷新数据丢失问题

1. 将vuex的数据保存到浏览器缓存中(sessionStorage, localStorage, cookie)
2. 页面刷新再次请求远程数据
