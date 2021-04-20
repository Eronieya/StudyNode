# 常用属性

## 文字超出省略

- 要给文字设置宽度, 不然没效果

```css
.ellipsis {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
```

- 指定行数换行

```css
// 必须是 弹性伸缩盒子模型 -webkit-line-clamp 属性才会生效
// 同时也需要结合 -webkit-box-orient 属性一起使用, 设置或检索伸缩盒模型显示
.clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: break-spaces;
    text-overflow: ellipsis;
}

// 英文换行需要加入下面代码
.en-wrap {
    word-wrap:break-word;
	word-break:break-all;
}
```

## 滑动

- 禁止页面单向滑动

  ```css
  html {
      touch-action: none;
      touch-action: pan-y;
      // or touch-action: pan-x;
      
  }
  ```

- **`-webkit-overflow-scrolling`** 属性控制元素在移动设备上是否使用滚动回弹效果.

## IOS 全屏底部安全距离

- env() 和 constant()，是IOS11新增特性，Webkit 的 css 函数，用于设定安全区域与边界的距离，有4个预定义变量：

  - safe-area-inset-left：安全区域距离左边边界的距离
  - safe-area-inset-right：安全区域距离右边边界的距离
  - safe-area-inset-top：安全区域距离顶部边界的距离
  - safe-area-inset-bottom ：安全距离底部边界的距离

  **注意：**env()和constant()函数有个必要的使用前提，当网页设置viewport-fit=cover的时候才生效，根据微信小程序的表现和我在实际真机测试时这两个函数生效，推测小程序里的viewport-fit默认是cover。

```css
.container {
    padding-bottom: constant(safe-area-inset-bottom); /*兼容IOS<11.2*/
	padding-bottom: env(safe-area-inset-bottom); /*兼容IOS>11.2*/
}
```

## 图片 image

- 解决div中img下4px的空白距离
  1. 定义图片img标签vertical-align:bottom，vertical-align:middle，vertical-align:top，vertical-align:bottom;。（默认和基线对齐vertical-align:baseline）
  2. 给img父元素div设置font-size=0;。
  3. 设置的宽高和img图片的大小一样即可。
  4. 设置img为display:block;。
     

