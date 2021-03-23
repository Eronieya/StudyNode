# Javascript 继承

## ES5

在引入class关键字之前，主要通过 **原型链** 和 **call()** 来实现类的继承

### 属性继承

```javascript
// Father 实际上指向的是一个 构造函数Constructor
// 1. 父构造函数
function Father(uname, age) {
    // this 指向父构造函数的对象实例
    this.uname = uname;
    this.age = age;
}

// 2. 子构造函数
function Son(uname, age, score) {
    // this 指向子构造函数的对象实例
    // 修改this指向 以借用父构造函数中的语句
    Father.call(this, uname, age);
    this.score = score;
}
```



### 方法继承

借用父构造函数继承方法

```javascript
// Father 实际上指向的是一个 构造函数Constructor
// 1. 父构造函数
function Father(uname, age) {
    // this 指向父构造函数的对象实例
    this.uname = uname
    this.age = age
}

// 2. 给 父构造函数 的 原型对象 声明方法
Father.prototype.money = function() {
    console.log('我是父类中的money()');
}

// 3. 子构造函数	
function Son(uname, age, score) {
    // this 指向子构造函数的对象实例
    Father.call(this, uname, age)
    this.score = score
}

// 4. 此时创建的 Son 对象无法继承 父类中的方法
// var son = new Son('yzoo', 18, 100)
// son.money() 
// Uncaught TypeError: son.money is not a function

// 5. 更改子构造函数的对象原型
// 	  通过这种对象方式修改原型对象，可以避免 父原型对象 被修改
Son.prototype = new Father()
// 6. 注意需要将 构造函数Constructor 指回原来的 Son构造函数
Son.prototype.constructor = Son

// 7. 此时再创建 Son实例对象 就可以继承到 父类中的方法
var son = new Son('yzoo', 18, 100)
son.money()
```



## ES6

### 继承

```javascript
// 1. 使用 class 关键字 声明一个类
class Father {
    // 2. 构造函数 相当于 ES5中 function Father()
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
	
    // 静态方法声明 在 class 里面可以省略 function 关键字
    static fn1() {
        console.log('fn1');
    }

    // 类内方法声明
    fn2() {
        console.log('fn2');
    }
}

// 3. 使用 extends 关键字 继承一个类
class Son extends Father {
    // 4. 构造函数中 使用 super(args...) 继承属性
    constructor(name, age) {
        super(name, age);
    }
	
    static s1() {
        console.log('son1');
    }

    s2() {
        console.log('son2');
    }
}
```

