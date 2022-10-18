# **Vue**-Router

## 路由模式的区别

### hash模式

**简介：** hash模式是开发中默认的模式，它的URL带着一个#，例如：[www.abc.com/#/vue](https://link.juejin.cn?target=http%3A%2F%2Fwww.abc.com%2F%23%2Fvue)，它的hash值就是`#/vue`。

**特点**：hash值会出现在URL里面，但是不会出现在HTTP请求中，对后端完全没有影响。所以改变hash值，不会重新加载页面。这种模式的浏览器支持度很好，低版本的IE浏览器也支持这种模式。hash路由被称为是前端路由，已经成为SPA（单页面应用）的标配。

**原理：** hash模式的主要原理就是**onhashchange()事件**：

使用onhashchange()事件的好处就是，在页面的hash值发生变化时，无需向后端发起请求，window就可以监听事件的改变，并按规则加载相应的代码。除此之外，hash值变化对应的URL都会被浏览器记录下来，这样浏览器就能实现页面的前进和后退。虽然是没有请求后端服务器，但是页面的hash值和对应的URL关联起来了。

### history模式

**简介：** history模式的URL中没有#，它使用的是传统的路由分发模式，即用户在输入一个URL时，服务器会接收这个请求，并解析这个URL，然后做出相应的逻辑处理。 **特点：** 当使用history模式时，URL就像这样：[abc.com/user/id](https://link.juejin.cn?target=http%3A%2F%2Fabc.com%2Fuser%2Fid)。相比hash模式更加好看。但是，history模式需要后台配置支持。如果后台没有正确配置，访问时会返回404。 **API：** history api可以分为两大部分，切换历史状态和修改历史状态：

- **修改历史状态**：包括了 HTML5 History Interface 中新增的 `pushState()` 和 `replaceState()` 方法，这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能。只是当他们进行修改时，虽然修改了url，但浏览器不会立即向后端发送请求。如果要做到改变url但又不刷新页面的效果，就需要前端用上这两个API。
- **切换历史状态：** 包括`forward()`、`back()`、`go()`三个方法，对应浏览器的前进，后退，跳转操作。

虽然history模式丢弃了丑陋的#。但是，它也有自己的缺点，就是在刷新页面的时候，如果没有相应的路由或资源，就会刷出404来。

如果想要切换到history模式，就要进行以下配置（后端也要进行配置）：

### 对比

调用 history.pushState() 相比于直接修改 hash，存在以下优势:

- pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；
- pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
- pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；
- pushState() 可额外设置 title 属性供后续使用。
- hash模式下，仅hash符号之前的url会被包含在请求中，后端如果没有做到对路由的全覆盖，也不会返回404错误；history模式下，前端的url必须和实际向后端发起请求的url一致，如果没有对用的路由处理，将返回404错误。

hash模式和history模式都有各自的优势和缺陷，还是要根据实际情况选择性的使用。

## 使用

多页应用 MPA 每一个页面都是一个 .html文件 SEO优化

单页应用 SPA 相当于 <a>标签 , 切换不同的视图
	后台管理系统 vue-element-admin
	element-ui

### 起步

### 安装

`npm i vue-router -S`

```javascript
// main.js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```



### 创建项目

使用 vue-cli3 来搭建项目 `vue create <project name>`

在创建的过程中 选择 router 依赖项，即可创建出一个项目

![image-20201021154351447](C:\Users\77176\AppData\Roaming\Typora\typora-user-images\image-20201021154351447.png)

### 基本介绍

- components 组件
  主要存放项目相关的 组件

- router 路由
  该目录存放了 路由的相关配置信息

  ```javascript
  // index.js
  import Vue from 'vue'
  // 1. 导入
  import VueRouter from 'vue-router'
  // 2. 模块化机制 使用Router
  Vue.use(VueRouter)
  
  import Home from '@/views/Home';
  import About from '@/views/About';
  
  // 3. 创建路由器对象
  // 4. 抛出路由对象
  export default new VueRouter({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      }
    ]
  })
  
  
  ```

  

- views 路由组件
  存放着 路由 所依赖的组件

- App.vue 入口组件

  ```vue
  // App.vue
  <template>
    <div id="app">
      <!-- router-link 相当于a标签 to属性相当于<a>标签的 href -->
      <div id="nav">
        <!-- <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link> -->
        <router-link :to="{ name: 'home' }">首页</router-link>
        <router-link :to=" { name: 'about' } ">关于</router-link>
      </div>
      <!-- router-view 相当于路由组件的出口 -->
      <router-view></router-view>
    </div>
  </template>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #nav {
    padding: 30px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  </style>
  ```

  

- main.js 依赖项

  ```javascript
  // main.js
  import Vue from 'vue'
  import App from './App.vue'
  // 导入 路由
  import router from './router'
  Vue.config.productionTip = false
  
  new Vue({
    // 将 router 挂载到 Vue 实例中
    router,
    render: h => h(App)
  }).$mount('#app')
  ```



### 标签和属性

- <router-link> 相当于 a 标签 (**声明式跳转**)
  - `to` 属性 相当于 <a> 中的 href
  - `params` 属性 在url中以 url/params 的方式传值
  - `query` 属性 在url中以 url?id=2&title=foo 的方式传值
- <router-view> 相当于 路由组件 的出口



### 通配符

在路由路径中使用 `*` 通配符的时候  可以在组件中使用 `$route.params.pathMatch`  来获取通配符的值

```vue
// App.vue
to属性中 可以传递一个 params对象 用于传递路由匹配 
...
<router-link :to={ name: 'user', params: { id: 1 } }>
```

```javascript
// index.js
...
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/user-*',
    	 	component: () => import('@/views/User-admin')
        }
    ]
})
```



### 动态路由匹配

当路由参数变化时 /user/1 切换到 /user/2 原来的组件实例会被复用
因为两个路由渲染了同个组件 复用高效

```vue
// App.vue
to属性中 可以传递一个 params对象 用于传递路由匹配 
...
<router-link :to={ name: 'user', params: { id: 1 } }>
```

```javascript
// index.js
...
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/user/:id',
            name: 'user',
            component: User
        }
    ]
})
```



### 路由查询参数

以 url 方式传递参数的时候
http://localhost:8080/page?id=1&title=foo
`<router-link>`  to属性中 可以传递一个 query对象 用于传递参数

```vue
// App.vue
to属性中 可以传递一个 query对象 用于传递参数
...
<router-link :to={ name: 'page', params: { id: 1 } }>
```



```javascript
// index.js
...
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/page',
            name: 'page',
            // 异步的方式加载组件
            component: () => import('@/views/Page')
        }
    ]
})
```



### 路由重定向

路由重定向有两种方式：

1. 以 路径 来重定向
2. 以 路由名 来重定向

```javascript
// index.js
...
export default new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/',
          // redirect: '/home'
          redirect: {name:'home'}
    	}
  ]
})
```



### 路由别名



### 路由组件传值

1.  props: true 方式， 在路由组件中通过 props:[ ‘property name’ ] 方式获取
2. 返回值的方式 在路由组件中也是通过 props:[ ‘property name’ ] 方式获取

```JavaScript
// index.js
...
export default new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/user/:id',
          name: 'user',
          component: User,
          // props: true
          props: (route) => ({
            id: route.params.id,
            title: route.query.title
          })
    	}
    ]
})
```



### 编程式导航

```javascript
<template>
    <button @click="jump">跳转首页</button>
</template>
<script>
	// 路由组件
    ...
	methods: {
        jump() {
            // 1. url 形式跳转
            this.$router.push('/')
            // 2. 对象 形式跳转
            this.$router.push({
                path: '/',
                name: 'home',
                params: { id: 2 },
                query: { plan: '123' }
            })
        }
    }
</script>

```



### 嵌套路由



### 组件取参

```vue
<template>
  <div>
    <h1>HOME</h1>
    <h2>param{{ param }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: null,
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      // 获取路由的参数
      this.param = this.$route.params;
    },
  },
};
</script>

<style scoped>
</style>
```

### keep-alive

```js
// router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '@/views/About';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
```

```vue
// views/Home.vue
<template>
  <div>
    <h1>HOME</h1>
    <h2>param{{ param }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: null,
    };
  },
  // 当组件在keep-alive内被切换时组件的activated、deactivated这两个生命周期钩子函数会被执行
  activated(){
      console.log('activated');
  },
  deactivated(){
      console.log('deactivated');
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      console.log("fetchData", this.$route);
      this.param = this.$route.params;
    },
  },
};
</script>

<style scoped>
</style>
```

### 项目演示

演示路径在 `./vue_router`

