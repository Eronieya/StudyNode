# Vue生命周期

## beforeCreate

实例在内存中被创建出来，此时还没初始化 data 和 methods 属性

## Created

实例已经在内存中创建完成，此时 data 和 methods已经创建完成，此时 $data 已经完成了初始化, 但是模板还没开始编译，$el也没有完成初始化。

此时还不能获取 DOM 节点。

此阶段 **最早获取 data 中数据**、**最早发送 ajax 请求数据的阶段**

如果在 `created()` 钩子进行DOM操作，要放在 `nextTick()` 的回调函数中。因为在created()钩子函数中，页面的DOM还未渲染，这时候也没办法操作DOM，所以，此时如果想要操作DOM，必须将操作的代码放在`nextTick()`的回调函数中。

## beforeMount

在此阶段已经完成了模板的编译，但是还没有 渲染到页面中

此阶段是 **最早获取 $el 的阶段**

## Mounted

此阶段已经完成了页面的渲染，把相应的模板挂载到指定的区域中显示

此阶段是 **最早获取 $refs** 的阶段 (**最早获取 DOM 节点** )

在 vue2.x 中使用 rel 属性获取, 在 $refs 中存储了这些拥有 rel属性 的标签

## beforeUpdate

## Updated

## beforeDestroy

## destroyed

