## Object.defineProperty

`Object.defineProperty()` 静态方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

```javascript
Object.defineProperty(obj, prop, descriptor)
```

#### Parameters

`obj`
	要定义属性的对象。

`prop`
	要定义或修改的属性的名称或 Symbol。

`descriptor`
	要定义或修改的属性描述符。

#### Return value

​	被传递给函数的对象。

#### descriptor

`configurable`
	当且仅当该属性的 `configurable` 键值为 `true` 时，该属性的描述符才能够被改变，同时该属性也能从对应的	对象上被删除。
	**默认为** **`false`**。

`enumerable`
	当且仅当该属性的 `enumerable` 键值为 `true` 时，该属性才会出现在对象的枚举属性中。
	**默认为 `false`**。

##### 数据描述符还具有以下可选键值：

`value`
	该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。
	**默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。

`writable`
	当且仅当该属性的 `writable` 键值为 `true` 时，属性的值，也就是上面的 `value`，才能被[`赋值运算符` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)改	变。
	**默认为 `false`。**

##### 存取描述符还具有以下可选键值：

`get`
	属性的 getter 函数，如果没有 getter，则为 `undefined`。当访问该属性时，会调用此函数。执行时不传入任何	参数，但是会传入 `this` 对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。该函数的返回值	会被用作属性的值。
	**默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。

`set`
	属性的 setter 函数，如果没有 setter，则为 `undefined`。当属性值被修改时，会调用此函数。该方法接受一个	参数（也就是被赋予的新值），会传入赋值时的 `this` 对象。
	**默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。