# 异步编程 promise

> 相关知识点
> 事件循环机制、同步和异步
>
> 发散知识点
> promise使用场景

## 什么是 promise

Promise是异步编程的一种解决方案。		

一个 `Promise` 对象代表一个在这个 promise 被创建出来时不一定已知的值。它让您能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。 这样使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 *promise*，以便在未来某个时候把值交给使用者。

1、主要用于异步计算
2、可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果
3、可以在对象之间传递和操作promise，帮助我们处理队列

​		有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。

​		JavaScript 中的 promise 代表的是已经正在发生的进程， 而且可以通过回调函数实现**链式调用**。

## 为什么使用 promise

1. 回调地狱
   某个异步操作需要等待之前的异步操作完成, 无论是回调还是事件都会陷入不断的嵌套

   ```js
   ajax({
   	url, mechod, data,
       success: res => {
           if(res.data) {
               ajax({
                   url, method, res.data.data,
                   success: res => {
                   	// ajax...
   	            }
               })
           }
       }
   })
   ```

2. 异步之间的联系
   某个异步操作需要等待多个异步操作的结果, 对这种联系的处理, 会让代码复杂度增加

为了解决上述问题，ES6引入了 Promise

## 异步模型

## promise 链式调用

```js
const myPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

## 缺点

- 无法取消Promise，一旦新建它就会立即执行，无法中途取消
- 如果不设置回调函数，Promise内部抛出的错误，不会反映到外部
- 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）



[参考]: https://www.jianshu.com/p/5833a2ae8035	"简书"
[参考]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise	"MDN"

[promise实例]: https://yangbo5207.github.io/wutongluo/ji-chu-jin-jie-xi-lie/shi-san-3001-promise.html

