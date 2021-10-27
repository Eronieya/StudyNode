## v-if和v-show的区别

`v-show` 会生成vnode，render的时候也会渲染成真实节点。在render的过程把节点的display属性修改成了`display:none;`。无论条件为真假，都会被挂载到页面上。

``v-if` 若条件为假，则生成 vnode 的时候将会忽略对应的节点，render的时候不会渲染成真实节点。

