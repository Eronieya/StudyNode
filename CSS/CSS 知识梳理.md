# CSS 知识梳理

## CSS 盒模型

![image-20201013160551692](C:\Users\77176\AppData\Roaming\Typora\typora-user-images\image-20201013160551692.png)

- Margin(外边距)：清楚边框外的区域，外边距是透明的
  - 在同一个 BFC 下外边距会发生折叠
- Border(边距)：围绕在内边距和内容外的边框
- Padding(内边距)：清楚内容周围的区域，内边距是透明的
- Content(内容)：盒子的内容，显示文本和图像

## Float 浮动

元素的水平方向浮动，意味着元素在足够宽的前提下可以进左右移动而不能上下移动。

一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含 边框 或 另一个浮动框的边框 为止。

浮动元素之前的元素将围绕它。浮动元素之后的元素将不会受到影响。

特点：

1. 脱离文档流
2. 向左向右浮动知道遇到父元素或者别的浮动元素
3. 浮动会导致父元素高度坍塌
4. 浮动元素不占空间

### 清除浮动(原理是创建 BFC)

1. 使用clear属性，指定元素两侧不出现浮动元素。
2. 浮动元素的 父元素 定义 overflow: hidden; 即激活 BFC
3. 浮动元素的 父元素 定宽高

## Position 定位

### Position 五个值

​	Static 、 relative 、 fixed 、 absolute 、 sticky

### Static 定位

​	HTML元素默认值，即没有定位，遵循正常的文档流对象。

​	此定位方式的元素不会受到top、bottom、left、right影响。

### fixed 定位

​	元素的位置相对于 **浏览器窗口** 是固定位置。窗口滚动不影响定位。

​	此定位方式以浏览器为参照对象，受top、bottom、left、right影响。

​	fixed 定位使元素位置与文档流无关，不占据空间。

​	fixed 定位的元素与其他元素重叠。

### relative 定位

​	相对定位元素相对其正常位置进行定位。

​	以自身正常位置为参照对象，受top、bottom、left、right影响。

​	移动相对定位元素，其原本所暂居空间位置不变。

​	relative定位经常被用来作为 **absolute** 定位元素的 **容器块**。

### absolute 定位

​	absolute 定位的元素相对于 最近 已定位的父元素

​	如果没有已定位的父元素，那么它的位置相对于<html>

​	absolute 定位使元素的位置与文档流无关，因此不占据空间。

​	absolute 定位的元素和其他元素重叠

### sticky 定位

​	sticky 定位基于用户的滚动位置来定位。

​	它在 relative 与 fixed 定位 之间切换。

​	元素定位表现为跨越特定值前为相对定位，跨越后为固定定位。

## display 显示

### display 常见属性值

1. none：隐藏对象
2. inline：指定对象为内联元素
3. block：指定元素为块元素
4. inline-block：指定对象为内联块元素
5. table-cell：指定对象为表格单元格
6. flex：弹性盒

### 块级元素特性

- 独占一行，默认情况下宽度自动填满其父元素宽度
- 宽度(width)、高度(height)、内边距(padding)、外边距(margin)都可以控制

### 内联元素特性

- 相邻的内联元素在同一行内。宽度随内容变化。
- 宽度(width)、高度(height)、上下边距均不起作用
- 左右边距(包括内外边距)起作用

### flex 弹性布局

​	弹性盒子由 弹性容器(Flex Container) 和 弹性子元素(Flex Item)组成。

​	弹性容器内包含了一个或多个弹性子元素。

​	flex 布局，可以解决元素在容器中的对齐、方向、顺序，甚至它们是动态的或者不确定大小的新布局模型。

​	**Flex容器的主要特征是能够调整其子元素在不同的屏幕大小中能够用最适合的方法填充合适的空间 。**

#### 父元素属性

- display:flex; ：定义一个flex容器。
- flex-direction：指定了主轴的方向。
  - row | row-reverse | column | column-reverse
- flex-wrap：用于指定弹性盒子元素换行方式。
  - nowrap | wrap | wrap-reverse
     不换行  |  换行  |   换行,第一行在下方
- flex-flow：是 flex-direction 和 flex-wrap 的简写形式。
  - 默认值为 row nowrap
- 对齐方式：
  - justify-content：设置或检索弹性盒子元素在主轴(横轴)方向对齐方式。
    - flex-start | flex-end | center | space-between | space-around
  - align-items：设置或检索弹性盒子元素在侧轴(纵轴)方向对齐方式。
    - flex-start | flex-end | center | baseline | stretch
      baseline: 项目的第一行文字的极限对齐
      stretch: 如果项目为设置高度或设为auto, 将占满整个容器的高度
- align-content：设置或检索弹性盒堆叠伸缩行的对齐方式。
  - flex-start | flex-end | center | stretch | space-between | space-around

#### 子元素属性

- order：默认情况下flex order会按照书写顺训呈现，可以通过order属性改变，数值小的在前面，还可以是负数
- flex-grow：设置或检索弹性盒的扩展比率
- flex-shrink：设置或检索弹性盒的收缩比率
- flex-basis：设置或检索弹性盒伸缩基准值
- flex：是 flex-grow, flex-shrink, flex-basis 的简写，默认值为 0 1 auto。 后两个值可选
- align-self：设置或检索弹性和子元素在侧轴(纵轴)方向上的对齐方式，可覆盖父容器 align-items 的设置