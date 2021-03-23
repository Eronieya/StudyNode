# Egret

## 对象层级架构

![对象层级架构](https://docs.egret.com/engine/img/docs/2dRender/displayObject/displayObject/5565305cb55a6.png)

## 相对坐标系

## 多次添加显示对象到显示列表

​	同一个显示对象无论被代码加入显示列表多少次，在屏幕上只绘制一次。

​	如果一个显示对象A被添加到了B这个容器中，然后A又被添加到了C容器中。那么在第二次执行 C.addChild(A) 的时候，A自动的从B容器中删除，然后添加到C容器中。

## 删除操作的注意点

​	当删除一个显示对象的时候需要执行的操作是：

​	`容器对象.removeChild( 显示对象 );`

​	执行删除操作时，“显示对象”必须拥有父级。换句话说，被删除的显示对象必须存在于容器对象当中。

## 深度管理

​	深度顺序(z-index)

​	默认从 0 开始。 `addChild()` 方法每次深度加1， 添加指定深度的时候需要使用 `addChildAt()` 方法。

​	使用方法 `容器.addChildAt(显示对象, 深度值)`

​	删除一个指定深度的显示对象 `容器.removeChildAt( 深度值 )`

​	将一个容器内的所有子对象全部删除 `容器.removeChildren()`

​	交换不同对象的深度 ：
​		`容器.swapChildren( 显示对象, 显示对象)` 
​		`容器.swapChildrenAt(深度值, 深度值)`

​	重设子对象深度 `容器.setChildIndex(显示对象, 新的深度值)`

​	访问容器子对象 `容器.getChildAt(深度值)` `容器.getChildByName(显示对象)`

​	**要给一个对象使用 zIndex，包含此显示对象的 DisplayObjectContainer 对象一定要设置 sortableChildren = true，开启排序功能，否则设置 zIndex 是无效的**

## 矢量绘图(Graphics)

​	

## egret属性

- alpha：透明度
- width：宽度
- height：高度
- rotation：旋转角度
- scaleX：横向缩放
- scaleY：纵向缩放
- skewX：横向斜切
- skewY：纵向斜切
- visible：是否可见
- x：X轴坐标值
- y：Y轴坐标值
- anchorOffsetX：对象绝对锚点X
- anchorOffsetY：对象绝对锚点Y

## 第三方库的使用

​	egret 第三方库要放在项目外面. 使用命令行编译`egret build -e`

​	在`egretProperties.json` 文件中进行配置相应的第三方库信息.

## feather 的用法

1. 使用 EgretFeather 创建 `particle` 导出文件
2. 使用第三方库 particle 
   在 `egretProperties.json`  文件中进行配置相应的第三方库信息.
3. 获取配置信息, 获取纹理
   `particle.GravityParticleSystem(texture, config)`

### feather进入页面满屏(未解决)

## 帧动画

1. 创建帧动画 使用 DragonBones 创建帧动画, 并且数据格式以 `Egret MC` 类型导出.	

	2. 导入资源文件
 	3. 使用 egret.MovieClipDataFactory 生成 MovieClipData 对象用于创建 MovieClip

