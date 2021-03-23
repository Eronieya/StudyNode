# Css

## flex自适应占满一行

​	在 flex 子容器中设置 `flex: auto`

## flex一行放固定个元素

​	在 flex 子容器中设置宽度 例如: 一行四个就 `width: 25%`

## 媒体查询 @media

​	在小程序中 使用 `device-height` 来判断 iphoneX 系列

# 微信小程序

## wx:if

​	在 `wx:if` 中不可以用 js 原生方法. 会无法访问到. 例如数组的方法.

​	可以使用 wxs 来封装一下需要用的函数。

## wx:for嵌套两层

```html
<view  wx:for="{{orderList}}" wx:key="item">
    <view wx:for="{{item.order_info}}" wx:key="idx" wx:for-item="pro">
    </view>
</view>
```

​	只要在内层循环中设置 `wx:for-item` 属性即可

# 组件的复用

1. 固定的组件布局
2. 页面传递参数给组件
3. 组件接收参数并且渲染到页面上

