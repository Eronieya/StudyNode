function defineReact(obj, key, value) {
    let publisher = new Publisher();
    Object.defineProperty(obj, key, {
        set: function (newVal) {
            console.log('触发setter');
            value = newVal;
            console.log(value);
            publisher.notify(); // 发布订阅
        },
        get: function () {
            console.log('触发getter');
            if (Publisher.global) {
                publisher.add(Publisher.global); // 添加订阅者
            }
            return value;
        }
    })
}

function observe(obj, vm) {
    Object.keys(obj).forEach((key) => {
        defineReact(vm, key, obj[key]);
    })
}

function Vue(options) {
    this.data = options.data;
    let id = options.el;

    observe(this.data, this);

    let container = document.getElementById(id);
    let fragment = virtualDom(container, this);
    container.appendChild(fragment);
}

let vm = new Vue({
    el: 'container',
    data: {
        msg: 'Hello world!',
        name: 'name text'
    }
});

console.log(vm.msg);
console.log(vm.name);