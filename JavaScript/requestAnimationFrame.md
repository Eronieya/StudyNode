## requestAnimationFrame

`window.requestAnimationFrame(callback)` 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法属于**宏任务**，所以会在执行完微任务之后再去执行。

`window.cancelAnimationFrame()` 取消回调函数

### 优势

1. CPU节能：当页面处理未激活的状态下, 该页面得屏幕刷新任务也会被系统暂停, 因此 RAF 也会停止渲染, 当页面被激活时, 动画就从上次停留的地方继续执行, 有效节省了 CPU 开销。
2. 函数节流
3. 减少DOM操作