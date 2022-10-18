## 虚拟DOM

Virtual dom, 即虚拟DOM节点。它通过 JS 的Object对象模拟DOM中的节点，然后再通过特定的render方法将其渲染成真实的DOM节点。

### createElement核心方法

createElement 接受`type`, `props`,`children`三个参数创建一个虚拟标签元素DOM的方法。

```reasonml
function createElement(type, props, children) {
    return new Element(type, props, children);
}
```

为了提高代码高度的复用性，我们将创建虚拟DOM元素的核心逻辑代码放到`Element`类中。

```kotlin
class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}
```

**注意**：将这些参数挂载到该对象的私有属性上，这样在new时也会有这些属性。

### render核心方法

render方法接受一个虚拟节点对象参数，其作用是：将虚拟DOM转换成真实DOM。

```javascript
function render(eleObj) {
    let el = document.createElement(eleObj.type); // 创建元素
    for(let key in eleObj.props) {
        // 设置属性的方法
        setAttr(el, key, eleObj.props[key])
    }
    eleObj.children.forEach(child => {
        // 判断子元素是否是Element类型，是则递归，不是则创建文本节点
        child = (child instanceof Element) ? render(child) : document.createTextNode(child);
        el.appendChild(child);
    });
    return el;
}
```

**注意**：在将虚拟DOM转换为真实DOM的时，转换属性时要考虑多种情况。像`value`、`style`等属性需要做特殊处理，具体的处理逻辑请看下方**元素设置属性**小节。