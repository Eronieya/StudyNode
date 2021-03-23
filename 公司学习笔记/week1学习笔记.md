# First Week Summary

## Vue-Cli 项目管理

​	`vue create <project-name>` 创建一个 vue 项目
​	`npm run dev` 运行一个 vue 项目

## Vue meta

​	在 vue 项目的 `index.html` 文件中进行配置

## Vue 中 动态绑定背景图

 在标签中动态绑定背景图

​	`   :style="{backgroundImage:'url('+ img1 +')'}"`
​	`img1: require('url') ` 

## Vue 触发事件 传递事件对象

​	以点击事件为例`@click="choice($event)"`

## Vant ui 使用

​	使用 vant ui 的时候, 需要从 vant 中 引入需要使用的组件. 使用 Button 为例

​		引入组件  `import { Button } from 'vant'`
​		引入样式文件  `import 'vant/lib/button/style'`

## 页内滚动条

​	overflow-x: scroll

## vue route 传递参数

### 传递参数

​	`<router-link :to="{path:'/url', query: {param: item}}">`

### 获取参数

​	`this.$route.query.param`





# Question

## canvas

## 移动端适配