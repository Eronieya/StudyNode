# 你不知道的JavaScript

## 作用域

### 编译原理

1. 分词/词法分析(Tokenizing/Lexing)
2. 解析/语法分析(Parsing)
3. 代码生成

### 引擎 编译器 作用域

1. 当遇到变量声明的时候，如 var a，编译器会询问作用域是否已经有一个该名称的变量存在于同一个作用域的集合中。如果是，编译器会忽略该声明，继续进行编译；否则它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为a。
2. 接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理 a = 2 这个赋值操作。引擎运行时会首先询问作用域，在当前的作用域集合中是否存在一个叫作 a  的变量。如果是，引擎就会使用这个变量；如果否，引擎会继续查找该变量。

**总结：变量的赋值操作会执行 两个动作，首先编译器会在当前作用域中声明一个变量（如果之前没有声明过），然后在运行时引擎会在作用域中查找该变量，如果能够找到就会对它赋值。**

作用域是一套规则，用于确定在何处以及如何查找变量（标识符）。如果查找的目的是对 
变量进行赋值，那么就会使用 LHS 查询；如果目的是获取变量的值，就会使用 RHS 查询。

### 引擎查找类型

- LHS(Left-Hand Side) 变量出现在赋值操作的左侧（找到变量的容器本身）
  可理解为 **赋值操作的目标是谁**
- RHS(Retrieve His Source Value) 出现在赋值操作的非左侧（找到某个变量的值）
  可理解为 **谁是赋值操作的源头**

LHS 和 RHS 查询都会在当前执行作用域中开始，如果有需要（也就是说它们没有找到所 需的标识符），就会向上级作用域继续查找目标标识符，这样每次上升一级作用域（一层 楼），最后抵达全局作用域（顶层），无论找到或没找到都将停止。 

不成功的 RHS 引用会导致抛出 ReferenceError 异常。不成功的 LHS 引用会导致自动隐式地创建一个全局变量（非严格模式下），该变量使用 LHS 引用的目标作为标识符，或者抛出 ReferenceError 异常（严格模式下）。

## 异常

- ReferenceError: 作用域判别失败相关；RHS查询失败时；严格模式下的LHS。
- TypeError:作用域判别成功, 但对结果的操作时非法或不合理的。

## 词法作用域

作用域共有两种主要的工作模型。第一种是最为普遍的，被大多数编程语言所采用的词法作用域，我们会对这种作用域进行深入讨论。另外一种叫作动态作用域，仍有一些编程语言在使用（比如 Bash 脚本、Perl 中的一些模式等）。

在多层的嵌套作用域中可以定义同名的标识符，这叫作“遮蔽效应”（内部的标识符“遮蔽”了外部的标识符）。**抛开遮蔽效应，作用域查找始终从运行时所处的最内部作用域开始，逐级向外或者说向上进行，直到遇见第一个匹配的标识符为止。**

**无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。**

**词法作用域查找只会查找一级标识符**，比如 a、b 和 c。如果代码中引用了 foo.bar.baz，词法作用域查找只会试图查找 foo 标识符，找到这个变量后，对象属性访问规则会分别接管对 bar 和 baz 属性的访问。

### 欺骗作用域

#### eval()

eval(..) 通常被用来执行动态创建的代码

在严格模式的程序中，eval(..) 在运行时有其自己的词法作用域，意味着其中的声明无法修改所在的作用域。

#### with

with 通常被当作重复引用同一个对象中的多个属性的快捷方式，可以不需要重复引用对象本身。

```js
function foo(obj) {
    with (obj) { 
        a = 2; 
    } 
}

var o1 = { a: 3 };
var o2 = { b: 3 };

foo( o1 ); 
console.log( o1.a ); // 2 foo( o2 ); 
console.log( o2.a ); // undefined 
console.log( a ); // 2——不好，a 被泄漏到全局作用域上了！
```

with 可以将一个没有或有多个属性的对象处理为一个完全隔离的词法作用域，因此这个对象的属性也会被处理为定义在这个作用域中的词法标识符。 

尽管 with 块可以将一个对象处理为词法作用域，但是这个块内部正常的 var 声明并不会被限制在这个块的作用域中，而是被添加到 with 所处的函数作用域中。

eval(..) 函数如果接受了含有一个或多个声明的代码，就会修改其所处的词法作用域，而 with 声明实际上是根据你传递给它的对象凭空创建了一个全新的词法作用域。

### 小结

词法作用域意味着作用域是由书写代码时函数声明的位置来决定的。编译的词法分析阶段基本能够知道全部标识符在哪里以及是如何声明的，从而能够预测在执行过程中如何对它们进行查找。

## 函数作用域 和 块级作用域

### 显式创建块

```js
var foo = true

if (foo) { 
    { // <-- 显式的快
		let bar = foo * 2; 
	    bar = something( bar ); 
        console.log( bar ); 
    } 
}

console.log( bar ); // ReferenceError
```

### 块级作用域

#### 垃圾收集

```JS
/*若不使用块定义，由于 click 函数形成 了一个覆盖整个作用域的闭包，JavaScript 引擎极有可能依然保存着这个结构（取决于具体 实现）。*/

function process(data) { // 在这里做点有趣的事情 
}

// 在这个块中定义的内容可以销毁了！ 
{
    let someReallyBigData = { .. }; 
    process( someReallyBigData ); 
}
var btn = document.getElementById( "my_button" ); btn.addEventListener( "click", function click(evt){
    console.log("button clicked");
}, /*capturingPhase=*/false );
```

#### let循环

for 循环头部的 let 不仅将 i 绑定到了 for 循环的块中，事实上它将其重新绑定到了循环的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值。

## 提升

JavaScript 引擎认为。它将 var a 和 a = 2 当作两个单独的声明，第一个是编译阶段的任务，而第二个则是执行阶段的任务。

## 闭包

闭包是基于词法作用域书写代码时所产生的自然结果，你甚至不需要为了利用它们而有意识地创建闭包。

当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。 

闭包使得函数可以继续访问定义时的词法作用域。

无论使用何种方式对函数类型的值进行传递，当函数在别处被调用时都可以观察到 闭包。

```js
function foo() {
    var a = 2;
    
    function baz() {
        console.log( a ); // 2
    }
    
    bar( baz );
}

function bar(fn) {
    fn(); // 产生闭包
}
```

在定时器、事件监听器、Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步（或者同步）任务中，只要使用了回调函数，实际上就是在使用闭包！ 

### 模块

```js
function CollModule() {
    var something = "cool";
    var another = [1, 2, 3];
    
    function doSomething() {
        console.log( somethig )
    }
    
    function doAnother() {
        console.log( another.join( " ! " ) );
    }
    
    return {
        doSomething,
        doAnother
    }
}

var foo = CoolModule();

foo.doSomething();
foo.doAnother();
```

模块模式需要具备两个必要条件

1. 必须有外部的封闭函数，该函数必须至少被调用一次（每次调用都会创建一个新的模块实例）。 
2. 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态。

```js
var foo = (function CoolModule(id) {
    function change() { 
        // 修改公共 API 
        publicAPI.identify = identify2; 
    }
    function identify1() {
        console.log( id ); 
    }
    function identify2() { 
        console.log( id.toUpperCase() ); 
    }
    var publicAPI = { 
        change: change, 
        identify: identify1 
    };
	return publicAPI; 
})( "foo module" ); 
foo.identify(); // foo module 
foo.change(); 
foo.identify(); // FOO MODULE
/* 通过在模块实例的内部保留对公共 API 对象的内部引用，可以从内部对模块实例进行修改，包括添加或删除方法和属性，以及修改它们的值。*/
```

**现代的模块机制**

```js
var MyModules = (function Manager() {
    var modules = {};
    
    function define(name, deps, impl) {
        for(let i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        // 核心代码
        modules[name] = impl.apply(impl, deps);
    }
    
    function get(name) {
        return modules[name];
    }
    
    return {
        define,
        get
    }
})()
```

### 总结

当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包。

模块有两个主要特征：
（1）为创建内部作用域而调用了一个包装函数；
（2）包装函数的回值必须至少包括一个对内部函数的引用，这样就会创建涵盖整个包装函数内部作用域的闭包。

**个人总结**：闭包的运用 a.模块化 

## this 指针

this是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。**this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。**

### 调用位置

调用位置就是函数在代码中被调用的 位置（而不是声明的位置）。

### 绑定规则

1. 默认绑定：不带任何修饰的函数调用

2. 隐式绑定：调用位置是否有上下文对象 (隐式丢失会应用 默认绑定)

3. 显式绑定：apply、call、bind 

   ```js
   // 简单的辅助绑定函数
   function bind(fn, obj) {
       return function() {
           return fn.apply(obj, arguments)
       }
   }
   ```

4. new绑定

优先级为 new绑定 => 显式绑定 => 隐式绑定 => 默认绑定

### 软绑定

```js
if (!Function.prototype.softBind) { 
    Function.prototype.softBind = function(obj) { 
        var fn = this; // 捕获所有 curried 参数
		var curried = [].slice.call( arguments, 1 );
		var bound = function() {
			return fn.apply( (!this || this === (window || global)) ? obj : this
			curried.concat.apply( curried, arguments ) );
        };
    bound.prototype = Object.create( fn.prototype );
	return bound; 
    }; 
}
```

### 小结

如果要判断一个运行中函数的 this 绑定，就需要找到这个函数的直接调用位置。

箭头函数会继承外层函数调用的 this 绑定

## 对象

### 对象定义

```js
// 第一种方法
var myObj = {
    key: value
};

// 第二种方法
var myObj = new Object();
myObj.key = value;
```

### 类型

对象是 Javascript 的基础。在 Javascript 中一共有六种主要类型(语言类型)

- string
- number
- boolean
- null
- undefined
- object

简单基本类型（string、boolean、number、null 和 undefined）本身并不是对象。 null 有时会被当作一种对象类型，但是这其实只是语言本身的一个 bug，即对 null 执行 typeof null 时会返回字符串 "object"。1 实际上，null 本身是基本类型。

**内置对象** (对象子类型)

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error

### 内容

对象的内容是由一些存储在特定命名位置的（任意类型的）值组成的， 我们称之为属性。

访问对象中的属性

```js
var myObject = { a: 2 };

// .a 通常称为 "属性访问"
myObject.a; // 2 

// ["a"] 通常称为 "键访问"
myObject["a"]; // 2
```

键访问的键可以是一个变量, 默认将键值转换成字符串string

```js
var myObj = {}

myObj[true] = 'foo';
myObj[3] = 'bar';
myObj[myObj] = 'baz';

myObj["true"]; // 'foo'
myObj['3']; // 'bar'
myObj['object Object']; // 'baz'
```

### Objct.defineProperty()

