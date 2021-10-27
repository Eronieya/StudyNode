# this指针指向问题

## 1. 普通函数 this

## 2. 对象方法 this

## 3. 构造函数 this

使用 `new` 调用构造函数的时候， this指向函数本身。

## 4. 绑定事件 this

## 5. 定时器 this

## 6. 立即执行函数 this

## 7. 箭头函数 this

向外层作用域中，一层层查找this，直到有this的定义



## this指针指向

1. **独立调用的函数** `fn()` 严格模式下为undefined，非严格模式下指向window
2. **调用者调用的函数** `obj.fun()` 指向调用者 obj

