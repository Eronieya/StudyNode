# JavaScript 事件冒泡 事件委托

## 事件委托

### 基本概念

事件代理(Event Delegation)， 又称之为事件委托。是 Javascript 中绑定事件的常用技巧。事件代理 即是把原本需要绑定在 子元素 的响应事件委托给 父元素，让父元素担当事件监听的职务。**事件代理的原理是 DOM 元素的 事件冒泡**

### 事件委托的优点

- 可以节省内存占用，减少事件注册
- 可以实现动态绑定事件

### js 事件委托的实现(原生)

```html
<!-- HTML内容片段 -->
<ul>
    <li id="first">first</li>
    <li id="second">second</li>
    <li id="third">third</li>
</ul>
```

```JavaScript
// 获取 ul 元素
var ul = document.querySelector('ul')

// 给 ul 添加事件
ul.addEventListener('click', function(event) {
    // event 是事件对象, event.target是触发事件的目标
    var target = event.target
    console.log(target)
})
```



## 事件冒泡

事件冒泡 是事件传播的第三个阶段。

## 事件传播

![img](https://img-blog.csdnimg.cn/2019011111581623.jpg)

事件传播分成三个阶段：

- 捕获阶段: 从window 对象传导到目标节点，称为 **捕获阶段(capture phase)**，捕获阶段不会响应任何事件
- 目标阶段: 在目标节点上触发，称为 **目标阶段**
- 冒泡阶段: 从目标节点传导回 window 对象，称为 **冒泡阶段(bubbling phase)**。事件代理即是利用 事件冒泡 的机制把里层所需要相应的事件绑定到外层

[原文转载]: https://blog.csdn.net/qq_38128179/article/details/86293394

## 阻止事件冒泡

1. event.stopPropagation()
   阻止了事件冒泡，但不阻止默认行为
2. return false
   阻止了事件冒泡，也阻止了默认行为
3. event.preventDefault()
   不阻止事件冒泡，但阻止默认行为

## target 、 currentTarget的区别

currentTarget 当前所绑定事件的元素

target 当前被点解的元素