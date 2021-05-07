# js的new()

> 相关知识点
> 原型链、this指针(apply, bind, call)
>
> 发散知识点
> 类型判断、数组的类型、

使用 new 操作符创建一个对象的时候实际上经历了四个步骤：

1. 创建一个空对象
2. 将空对象的 `__proto__` 属性指向构造函数的原型对象
3. 将 `this` 指向这个对象
4. 返回新对象

```javascript
function newFactory(constructor) {
    var obj = {}
    obj.__proto__ = contructor.prototype
    // slice()从数组中返回选定元素
    constructor.apply(obj, [].slice.call(arguments, 1))
    return obj
}

// 声明一个 Person 类
function Person(name, age){
    this.name = name
    this.age = age
}

// 使用 new 创建 Person 实例对象
var newPerson = new Person('zhangsan', 15)

// 不使用 new 创建 Person 实例对象
var p = newFactory(Person, 'Amy', 18)
```

[参考]: https://www.cnblogs.com/faith3/p/6209741.html



```js
// 先一本正经的创建一个构造函数，其实该函数与普通函数并无区别
var Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        return this.name;
    }
}

// 将构造函数以参数形式传入
function New(func) {

    // 声明一个中间对象，该对象为最终返回的实例
    var res = {};
    if (func.prototype !== null) {

        // 将实例的原型指向构造函数的原型
        res.__proto__ = func.prototype;
    }

    // ret为构造函数执行的结果，这里通过apply，将构造函数内部的this指向修改为指向res，即为实例对象
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));

    // 当我们在构造函数中明确指定了返回对象时，那么new的执行结果就是该返回对象
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }

    // 如果没有明确指定返回对象，则默认返回res，这个res就是实例对象
    return res;
}

// 通过new声明创建实例，这里的p1，实际接收的正是new中返回的res
var p1 = New(Person, 'tom', 20);
console.log(p1.getName());

// 当然，这里也可以判断出实例的类型了
console.log(p1 instanceof Person); // true
```

[参考]: https://yangbo5207.github.io/wutongluo/ji-chu-jin-jie-xi-lie/jiu-3001-mian-xiang-dui-xiang.html

