# Javascript

## 节流

```js
// utils.js
const throttle = (func, delay) => {
  let oldDate = Date.now()
  console.log(oldDate); // 仅触发一次
  
  // 由于触发事件接受的是一个 函数对象 因此返回一个函数
  return function() {
    // 保存this指针
    let that = this
    // 获取参数
    let args = arguments
    let newDate = Date.now()
    // 此处使用了 oldDate , 形成了闭包
    if(newDate - oldDate > delay) {
      func.apply(that, args)
      oldDate = Date.now()
    }
  }
}

export default {
  throttle
}
```

```js
// component.js
const util = reuire('../utils/util')

...

Component({
    methods: {
        doSomething: util.default.throttle(function(e) {
            // do what you want
        }, 1000)
    }
})
```



# Css

## transform

- transform-origin

## transition

- 


