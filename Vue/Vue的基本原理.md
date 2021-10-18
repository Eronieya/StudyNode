## Vue的基本原理

1. 建立虚拟DOM Tree，通过 `document.createDocumentFragment()`, 遍历指定根节点内部节点，根据 {{ prop }}、 v-model 等规则进行 compile;
2. 通过 `Object.defineProperty() ` 进行数据变化拦截;
3. 截取到的数据变化，通过 发布者 - 订阅者模式，触发Watcher，从而改变虚拟DOM中的具体数据;
4. 通过改变虚拟DOM元素值，从而改变最后渲染DOM树的值，完成双向绑定。

完成数据的双向绑定在于 `Object.defineProperty()`

