# Javascript

## 对象赋值

1.  `   ["icons[0].tips"]: gdata.homeTips`

# uni-app

## 目录结构

- 编译到任意平台时，`static` 目录下的文件均会被打包进去，非 `static` 目录下的文件（vue、js、css 等）被引用到才会被包含进去。
- `static` 目录下的 `js` 文件不会被编译，如果里面有 `es6` 的代码，不经过转换直接运行，在手机设备上会报错。
- `css`、`less/scss` 等资源同样不要放在 `static` 目录下，建议这些公用的资源放在 `common` 目录下。
- HbuilderX 1.9.0+ 支持在根目录创建 `ext.json` `sitemap.json` 文件。

## 资源路径

​	/ 绝对路径，@指向项目根目录，在cli项目中@指向src目录

## 禁止蒙版下的页面滚动

​	可使用 `@touchmove.stop.prevent="moveHandle"` ，moveHandle 可以用来处理 touchmove 的事件，也可以是一个空函数。

## 全局变量

### 公用模块

​	定义一个专用的模块，用来组织和管理这些全局的变量，在需要的页面引入。

1. 在 uni-app 项目根目录下创建 common 目录，然后在 common 目录下新建 helper.js 用于定义公用的方法。并将要用的导出 `export`
2. 接下来在 pages/index/index.vue 中引用该模块 `import`

### 挂载 Vue.prototype (只支持vue页面)

​	将一些使用频率较高的常量或者方法，直接扩展到 Vue.prototype 上，每个 Vue 对象都会“继承”下来。

1. 在 main.js 中挂载属性/方法 `Vue.prototype.$websiteUrl = 'http://www.baidu.com'`
2. 然后在任意页面中调用 `this.$websiteUrl`

tips:

- 每个页面中不要在出现重复的属性或方法名。
- 建议在 Vue.prototype 上挂载的属性或方法，可以加一个统一的前缀。比如 $url、global_url 这样，在阅读代码时也容易与当前页面的内容区分开。

### globalData

```js
// App.vue
export default {
    globalData: {
        text: 'text'
    }
}
```

​	js 中操作globalData的方式：

​		赋值：`getApp().globalData.text = 'test'`

​		取值：`console.log(getApp().globalData.text)`

tips: 

- 如果需要把globalData的数据绑定到页面上，可在页面的onshow声明周期里进行变量重赋值。

### Vuex

## 全局组件

​	`uni-app` 支持配置全局组件，需在 `main.js` 里进行全局注册，注册后就可在所有页面里使用该组件。

## 获取上个页面传递的数据

​	在 `onLoad` 里得到，`onLoad` 的参数是其他页面打开当前页面所传递的数据。

# Sass

## 在vue中使用sass

1. 首先要安装依赖

```shell
npm install sass --save-dev
npm install node-sass --save-dev
npm install sass-loader --save-dev
```

	2. 在 vue 中使用

```scss
<style scoped lang="scss">
$mycolor: #55aaff;
h3 {
	color: $mycolor;
}
</style>
```

 

# javascript

## 获取屏幕高度

1. document.body.clientHeight 是页面内容有效高度, 符合盒模型。
2. document.body.scrollHeight 是网页可滚动区域的高度。

# Vue

## 获取 dom 节点高度

1. refs 获取 dom节点 `this.$refs.name.$el.offsetHeight`



## H5端打开 高德地图app

​	APP和H5端可以使用scheme方式唤醒高德地图进行导航

```js
iosamap://navi?sourceApplication=applicationName&poiname=fangheng&poiid=BGVIS&lat=36.547901&lon=104.258354&dev=1&style=2
```

[官方文档]: https://lbs.amap.com/api/amap-mobile/guide/android/route

