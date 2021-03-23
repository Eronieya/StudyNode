# div水平垂直居中的方法

## 方法一：绝对定位 - transform

当前 div 不确定宽高：
	使用 `transform: translate(-50% -50%)` ;
	父级元素添加相对定位 (position: relative;)
	子元素

```css
div {
	position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```



## 方法二：绝对定位 - 负margin值

当前 div 确定宽高：
	使用 margin 值为 div 宽高的 一半 负值
	父级元素添加相对定位(position: relative;)
	子元素

```css
div {
	width: 600px;
    height: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -300px;
    margin-top: -300px;
}
```



## 方法三：绝对定位 - margin:auto;

当前 div 定宽高：

​	top left right bottom 都设为 0 ， margin: auto;

```css
div{
	width: 600px;
    height: 600px;
    position: absolute;
	top: 0;
    right: 0;
    bottom: 0;
    left: 0;
   	margin: auto;  
}
```



## 方法四：绝对定位 - calc()

父子都定宽高

```css
.father {
	position: relative;
	width: 800px;
	height: 500px;
}
.child {
	position: absolute;
	width: 600px;
	height: 300px;
	top: calc((800px - 600px) / 2);
	left: calc((500px - 300px) / 2);
}
```



## 方法五：flex 布局方法

```css
.father {
	display: flex;
    align-items: center;
    justify-content: center;
}

.child {
    width: 600px;
    height: 600px;
}
```

