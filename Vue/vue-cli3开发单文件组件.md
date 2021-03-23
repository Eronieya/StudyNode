# vue单文件组件

## JavaScript 形式开发组件

```js
Vue.component('组件名', {
    
})
new Vue({})
```

### 缺点

- 全局定义组件名时，不可以重复
- 字符串模板 es6提供模板字符串
- 不支持 css
- 没有构建步骤

## Vue 形式开发组件

在 vue 中把 .vue 的文件称为 单文件组件

### 优点

- 完整语法高亮
- CommonJS 模块
- 组件作用域的 CSS

## Vue CLI3 脚手架

### 基本配置

- 安装NodeJS
  为了获取 npm

- 安装淘宝镜像源

  `npm install -g cnpm --registry=https://registry.npm.taobao.org`
  安装后 `npm` 可以用 `cnpm` 代替

- 安装 Vue CLI3脚手架

### 快速原型开发

你可以使用 `vue serve` 和 `vue build` 命令对单个 `*.vue` 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展：

```shell
npm install -g @vue/cli-service-global
```

`vue serve` 的缺点就是它需要安装全局依赖，这使得它在不同机器上的一致性不能得到保证。因此这只适用于快速原型开发。

