# 微信小程序

## WXML

### view

​	换行： `white-space: pre-line;`

### text

​	换行: `word-break: break-all;`

## 微信小程序文件

​	`.js`  文件

​	`.json` 配置信息内容

​	`.wxml` 相当于 `.html`

​	`.wxss` 相当于 `.css`

## 事件￥

## 组件

### 组件的配置信息

​	配置组件：组件目录的 `.json ` 文件中配置 `"component":true`

​	使用组件： `.json` 文件中 配置 `"usingComponents"`

### slot 插槽

​	`<slot>` 把组件标签额外内容放置在插槽里

### behaviors

behavior 的使用和声明

behavior 拥有组件拥有的一切，只是一个组件间数据共享的块。

```js
// behavior.js
module.exports = Behavior({
    ...
})
```

```js
// myComponent
var behavior = requeire('./behavior')
```



### 数据监听器

​	数据监听器可以用于监听和响应任何属性和数据字段的变化。

```js
Component({
  attached: function() {
    this.setData({
      numberA: 1,
      numberB: 2,
    })
  },
  observers: {
    'numberA, numberB': function(numberA, numberB) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        sum: numberA + numberB
      })
    }
  }
})
```



​	**组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用。**

### 组件间传值

#### 模板数据绑定

​	用于 **父传子**

```html
<!-- index.wxml -->
<component-tag-name prop-a="{{ dataFiledA }}" prop-b="{{ dataFiledB }}">
</component-tag-name>
```

​	`properties ` 的属性直接存储在 组件 data 中 . 在组件内可以通过 `this.data.param` 来访问

```js
// index.js
Component({
    // 设置数据的类型
    properties: {
        dataFiledA: String,
        dataFiledB: String
    }
})
```

​	用于 **子传父**

​	使用 监听事件`bind:evet` 和 触发事件`triggerEvent` , 子组件可以触发父组件的事件方法

### 组件间方法调用￥

### 自定义Tab-Bar￥

### 自定义Modal￥

## Api

## switchTab￥

## navigateTo￥

## 小程序生命周期

### Created

​	组件实例刚刚被创建好时，`created` 生命周期被触发。此时，组件数据 `this.data` 就是在 `Component` 构造器中定义的数据 `data` 。此时不能调用 `setData` 。通常情况下，这个生命周期只应该用于给组件 `this` 添加一些自定义属性字段

### Attached

​	在组建完全初始化完毕、进入页面节点树后， `attached` 生命周期被触发。此时，`this.data` 已被初始化为组件的当前值。绝大多数初始化工作可在这个时机进行。

### Detached

​	在组件离开页面节点树后，`detached` 生命周期被触发。退出一个页面时，如果组件还在页面节点树中，则 `detached` 会被触发

## 获取屏幕宽高

​	`wx.getSystemInfoSync().windowHeight` 获取当前屏幕的高度

​	`wx.getSystemInfoSync().windowWidth` 获取当前屏幕的宽度

# SCSS￥

# Canvas

​	在 wx:if 中使用 canvas 会出现 第一次正常显示， 隐藏后 第二次显示不正常。
使用 hidden 来代替

## wx.createCanvasContext

​	创建一个 canvas 上下文， 获取 canvas 对象

​	wx.createCanvasContext(String canvasId, Object this)

​	该函数需要传入 `canvas-id`属性 和 组件  `this`

​	返回一个 CanvasContext

## CanvasContext￥

## Canvas实现圆角

```js
	const canvasContext = wx.createCanvasContext('myCanvas', this)
	// 圆角效果(剪切画板)
    canvasContext.save()
    canvasContext.beginPath()
    // 左上
    canvasContext.arc(11, 11, 11, 1 * Math.PI, 1.5 * Math.PI)
    // 右上
    canvasContext.arc(326, 11, 11, 1.5 * Math.PI, 2 * Math.PI)
    // 右下
    canvasContext.arc(326, 411, 11, 0, 0.5 * Math.PI)
    // 左下
    canvasContext.arc(11, 411, 11, 0.5 * Math.PI, 1 * Math.PI)
    canvasContext.clip()
```

​	主要思路是在画布四个角画四个 四分之一 圆

# 自定义Modal

## 思路

​	modal 主要是通过 `position: fixed;` 来实现。

​	主要组成部分有两块。 一是遮罩层， 二是内容框。

## 代码

```html
<!-- modal.wxml -->
<view class="container">
  <!-- 遮罩层 -->
  <view class="mask-layer {{ show ? 'mask-layer--show' : 'mask-layer--hide'}}" style="width:{{ fullWidth }}px; height:{{ fullHeight }}px" bind:tap="closeModal"></view>

  <!-- 内容框 -->
  <view class="content {{ show ? 'content--show' : 'content--hide'}}">
    <!-- 关闭内容框 -->
    <view class="content__close">
      <image class="content__close--button" src="/local/btn_close.png" mode="widthFix" bind:tap="closeModal"></image>
    </view>
   </view>

</view>
```

```js
// modal.js
Component({
  data: {
    show: false
  },
  method: {
    // 关闭模态框
    closeModal: function() {
      this.setData({
        show: false
      })
    },
  },
  
  attached: function() {
    // 获取屏幕的总宽高
    this.setData({
      fullHeight: wx.getSystemInfoSync().windowHeight,
      fullWidth: wx.getSystemInfoSync().windowWidth
    })
  }
})
```

```css
/* 遮罩层样式 */
.mask-layer {
  position: fixed;
  top: 0;
  z-index: 1;
  background: rgba(0, 0, 0, .7);
}
/* 内容框样式 */
.content {
  background: white;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  min-height: 30%;
  max-height: 70%;

  border-radius: 25rpx;
  z-index: 2;
  transition: .5s;
}
/* 按钮框 */
.content__close {
  overflow: hidden;
  float: right;
  padding-top: 10rpx;
  padding-right: 10rpx;
}
/* 关闭按钮样式 */
.content__close--button {
  width: 60rpx;
}
/* 隐藏模态框 */
.content--hide {
  transform: translate(-50%, -50%) scale(0);
}
/* 显示模态框 */
.content--show {
  transform: translate(-50%, -50%) scale();
}
/* 隐藏遮罩层 */
.mask-layer--hide {
  display: none;
}
/* 显示遮罩层 */
.mask-layer--show {
  display: block;
}
```

