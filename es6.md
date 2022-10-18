# ES6

## let 和 const

1. let 命令
   - 不存在变量提升
   - 暂时性死区(temporal dead zone, TDZ)
   - 不允许重复声明
   - 块级作用域
2. const 命令
   - 复合类型  (`const`只能保证这个指针是固定的)
   - 简单类型  

​     `const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。



## 解构赋值

1. 数组的解构赋值

   - 允许默认值(数组成员严格等于"===" `undefined`时默认值才生效)

2. 对象的解构赋值

   - 对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

   ```javascript
   // 对象的解构赋值
   let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
   
   // 实际上的赋值过程
   let { keyA: valueA, keyB: valueB} = { keyA: 'i am A', keyB: 'i am B' }
   valueA // 'i am A'
   valueB // 'i am B'
   ```

   - 允许默认值(对象的属性值严格等于"===" `undefined`时默认值才生效)

3. 字符串的解构赋值

   - 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

   ```javascript
   const [a, b, c, d, e] = 'hello';
   a // "h"
   b // "e"
   c // "l"
   d // "l"
   e // "o"
   ```

   - 类似数组的对象都有一个`length`属性，因此还可以对这个属性解构赋值。

   ```javascript
   let {length : len} = 'hello';
   len // 5
   ```

4. 数值和布尔值的解构赋值

### 用途

1. 交换变量的值

   ```js
   let x = 1,
       y = 2;
   [x, y] = [y, x];
   ```

2. 从函数返回多个值

   ```js
   // 返回一个数组
   function example() {
     return [1, 2, 3];
   }
   let [a, b, c] = example();
   
   // 返回一个对象
   function exampleObject() {
     return {foo: 1, bar: 2};
   }
   let {foo, bar} = exampleObject();
   ```

3. 函数参数的定义 / 函数参数的默认值

   ```js
   function f({x, y = 168, z}) {...}
   f({z: 3, x: 1});
   ```

4. 提取 JSON 数据

   ```js
   let jsonData = {
     id: 42, 
     status: "OK",
     data: [867, 5309]
   };
   let {id, status, data: number} = jsonData;
   id // 42
   status // "OK"
   number // [867, 5309]
   ```

5. 遍历 Map 结构

   > 任何部署了 Iterator 接口的对象，都可以用 for ... of 遍历循环

   ```js
   const map = new Map();
   map.set('first', 'hello');
   map.set('second', 'world');
   
   for (let [key, value] of map) {
     console.log(`${key} is ${value}`);
   }
   // first is hello
   // second is world
   ```

6. 输入模块的指定方法



## 扩展运算符

扩展运算符可以应用在有iterator接口的对象 或 Gennerator函数中。如果对不存在遍历器的对象使用扩展运算符则会报错。

`object[Symbol.iterator]`  判断是否存在iterator



## 为原生 Object 加上遍历器

使用了 `Symbol, interator, Generator`

如此一来，就可以使用 `for...of`循环了

```js
// 声明一个 Generator函数
function* objectEntries() {
  let propKeys = Object.keys(this);

  for (let propKey of propKeys) {
    yield [propKey, this[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

jane[Symbol.iterator] = objectEntries;

// 使用了结构赋值
for (let [key, value] of jane) {
  console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe
```



## 数值

1. 去除小数部分 `Math.trunc()`
2. 指数运算符 (`**`)



## 字符串

1. padStart(length, content) padEnd(length, content) 补全长度的功能



## 函数

### 箭头函数this

​	箭头函数的 this 绑定定义时所在的作用域

### 尾递归

### 尾调用优化（重点，只能在严格模式下）



## 数组新API

### Array.from()

​	`Array.from()`可以将各种值转为真正的数组，并且还提供`map`功能。

### Array.of()

​	`Array.of`方法用于将一组值，转换为数组。

### Array.copyWithin() 

浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。「将会改变原数组」

### findIndex()

方法返回数组中满足提供的测试函数的第一个元素的**索引**。

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

### fill()

用于填充数组

```js
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
```

### entries(), keys(), values()

keys()是对键名的遍历
values()是对键值的遍历
entries()是对键值对的遍历

### Array.prototype.sort()

用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。

### flatMap() 

首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。

### flat()

会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

### includes()

用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。



## 对象

### 属性的遍历

1. for...in

   `for...in`循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

2. Object.keys(obj)

   `Object.keys`返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

3. Object.getOwnPropertyNames(obj)

   `Object.getOwnPropertyNames`返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

4. Object.getOwnPropertySymbols(obj)

   `Object.getOwnPropertySymbols`返回一个数组，包含对象自身的所有 Symbol 属性的键名。

5. Reflect.ownKeys(obj)

   `Reflect.ownKeys`返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

五种方法都遵循几个规则： 首先遍历所有数值键，按照数值升序排序；其次遍历所有字符串键，按照加入时间升序排序；最后遍历所有Symbol键，按照加入时间升序排序。



### 属性可枚举性

对象的每个属性都有一个描述对象(Descriptor)，用来控制该属性的行为。
`Object.getOwnPropertyDescriptor()` 可以获取该属性的描述对象。
描述对象的enumerable属性，称为"可枚举性"。

四个操作会忽略 enumerable 为 false 的属性:

1. for...in : 只遍历对象自身的和继承的可枚举属性。
2. Object.keys() : 返回对象自身的所有可枚举属性的键名。
3. JSON.stringify() : 只串行化对象自身的可枚举属性。
4. Object.assign() : 忽略enumerable为false的属性，只拷贝对象自身的可枚举属性。



### super 关键字

​	`super`，指向当前对象的原型对象。

​	注意，`super`关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。



### 链式判断运算符

​	编程实务中，如果读取对象内部的某个属性，往往需要判断一下该对象是否存在。比如，要读取`message.body.user.firstName`，安全的写法是写成下面这样。

```javascript
// 错误的写法
const  firstName = message.body.user.firstName;

// 正确的写法
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';
```

​	三元运算符`?:`也常用于判断对象是否存在。

```javascript
const fooInput = myForm.querySelector('input[name=foo]')
const fooValue = fooInput ? fooInput.value : undefined
```

​	这样的层层判断非常麻烦，因此 [ES2020](https://github.com/tc39/proposal-optional-chaining) 引入了“链判断运算符”（optional chaining operator）`?.`，简化上面的写法。

```javascript
const firstName = message?.body?.user?.firstName || 'default';
const fooValue = myForm.querySelector('input[name=foo]')?.value
```

​	下面是`?.`运算符常见形式，以及不使用该运算符时的等价形式。

```javascript
a?.b
// 等同于
a == null ? undefined : a.b

a?.[x]
// 等同于
a == null ? undefined : a[x]

a?.b()
// 等同于
a == null ? undefined : a.b()

a?.()
// 等同于
a == null ? undefined : a()
```



### Null 判断运算符

[	ES2020](https://github.com/tc39/proposal-nullish-coalescing) 引入了一个新的 Null 判断运算符`??`。它的行为类似`||`，但是只有运算符左侧的值为`null`或`undefined`时，才会返回右侧的值。

```javascript
const headerText = response.settings.headerText ?? 'Hello, world!';
const animationDuration = response.settings.animationDuration ?? 300;
const showSplashScreen = response.settings.showSplashScreen ?? true;
```

上面代码中，默认值只有在左侧属性值为`null`或`undefined`时，才会生效。

这个运算符的一个目的，就是跟链判断运算符`?.`配合使用，为`null`或`undefined`的值设置默认值。

```javascript
const animationDuration = response.settings?.animationDuration ?? 300;
```

​	上面代码中，如果`response.settings`是`null`或`undefined`，或者`response.settings.animationDuration`是`null`或`undefined`，就会返回默认值300。也就是说，这一行代码包括了两级属性的判断。



## Set 和 Map

### Set

​	ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。**多用于数组去重**



### Map

​	ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

​	初始化时可传入一个二维数组



### WeakMap

`WeakMap`与`Map`的区别有两点。

- `WeakMap `只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。

- `WeakMap` 的键名所指向的对象，不计入垃圾回收机制。



## proxy

### get()

1. 实现数组读取负数的索引。
2. 实现属性的链式操作,达到将函数名链式使用的效果。



## && 和 || 的使用

- a() && b()
  执行 a() 后返回 true, 则执行 b() 并返回 b 的值; 如果执行 a() 后返回 false, 则整个表达式返回 a() 的值, b() 不执行

- a() || b()
  执行 a() 后返回 true, 则整个表达式返回 a() 的值, b() 不执行; 如果执行 a() 后返回 false, 则执行 b() 并返回 b() 的值

- a() && b() || c()
  如果执行 a() 后返回 true, 则执行 b() 并返回 b() 的值, 不执行 c(); 如果执行 a() 后返回 false, 则执行 c() 并返回 c() 的值

  && 优先级高于 ||

