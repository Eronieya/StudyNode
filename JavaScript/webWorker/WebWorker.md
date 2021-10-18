## Web Worker

web worker是运行在后台的js, 独立于其他脚本, 不会影响页面的性能。并通过 postMessage 将结果回传到主线程。这样在进行复杂操作的时候, 就不会阻塞主线程了。

创建web worker：

1. 检测浏览器对于 web worker 得支持性
2. 创建 web worker 文件
3. 创建 web worker 对象

