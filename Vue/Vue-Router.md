# **Vue**-Router

多页应用 MPA 每一个页面都是一个 .html文件 SEO优化

单页应用 SPA 相当于 <a>标签 , 切换不同的视图
	后台管理系统 vue-element-admin
	element-ui

## 起步

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



## 标签和属性

- <router-link> 相当于 a 标签 (**声明式跳转**)
  - `to` 属性 相当于 <a> 中的 href
  - `params` 属性 在url中以 url/params 的方式传值
  - `query` 属性 在url中以 url?id=2&title=foo 的方式传值
- <router-view> 相当于 路由组件 的出口



## 通配符

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



## 动态路由匹配

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



## 路由查询参数

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



## 路由重定向

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



## 路由别名



## 路由组件传值

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



## 编程式导航

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



## 嵌套路由



## 组件取参

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

## keep-alive

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

## 项目演示

演示路径在 `./vue_router`

