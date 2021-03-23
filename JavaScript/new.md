# js的new()

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

