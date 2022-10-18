# BFC的特性及应用

BFC(Block Formatting Contexts)直译为"块级格式化上下文"。Block Formatting Contexts就是页面上的一个隔离的渲染区域，容器里面的子元素不会在布局上影响到外面的元素，反之也是如此。如何产生BFC？
float的值不为none。 
overflow的值不为visible。 
position的值不为relative和static。
display的值为table-cell, table-caption, inline-block中的任何一个。 
那BFC一般有什么用呢？比如常见的多栏布局，结合块级别元素浮动，里面的元素则是在一个相对隔离的环境里运行。

## BFC的布局规则

- 内部的Box会在垂直方向，一个接一个地放置。
- Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
- 每个BFC内子元素的左外边距与BFC块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界）
- BFC的区域不会与float的元素区域重叠
- BFC是页面上一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。并且 BFC 具有普通容器所没有的一些特性。
- 计算BFC的高度时，浮动元素也参与计算

## 触发BFC

只要元素满足下面任一条件即可触发 BFC 特性：

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

## 避免同一BFC下外边距发生折叠

```html
<style>
    .container {
        overflow: hidden;
    }        
    p {
        width: 100px;
        height: 100px;
        background: lightblue;
        margin: 100px;
    }
</style>
    
<body>
    <div class="container">
        <p></p>
    </div>
    <div class="container">
        <p></p>
    </div>
</body>
```

![image-20201013163257226](C:\Users\77176\AppData\Roaming\Typora\typora-user-images\image-20201013163257226.png)

## 清除浮动

```html
<div style="border: 1px solid #000; overflow: hidden;">
        <div style="width: 100px; height: 100px; background: #eee; float: left;"></div>
    </div>
```

创建BFC之前 即添加`overflow: hidden;` 之前，未计算浮动元素的高度![image-20201013183726029](C:\Users\77176\AppData\Roaming\Typora\typora-user-images\image-20201013183726029.png)

在创建BFC之后![image-20201013183619016](C:\Users\77176\AppData\Roaming\Typora\typora-user-images\image-20201013183619016.png)

## 消除浮动元素覆盖

创建BFC之前，为浮动元素被浮动元素覆盖了![image-20201013184037991](C:\Users\77176\AppData\Roaming\Typora\typora-user-images\image-20201013184037991.png)

创建BFC之后![image-20201013184119116](C:\Users\77176\AppData\Roaming\Typora\typora-user-images\image-20201013184119116.png)

## 总结

因为BFC内部的元素和外部的元素绝对不会互相影响，因此， 当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。同样的，当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度。避免margin重叠也是这样的一个道理。