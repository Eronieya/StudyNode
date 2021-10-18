let obj = {};

Object.defineProperty(obj, 'name', {
    get: function () {
        console.log('getter调用');
    },

    set: function (newVal) {
        // 在vue中实际上使用了watcher, 以及 发布者-订阅者模式
        console.log('setter调用', newVal);
        document.querySelector('.v-model__div').innerHTML = newVal;
        document.querySelector('.v-model__input').value = newVal;
    }
})

// 监听输入事件
document.querySelector('.v-model__input').addEventListener('input', function (e) {
    obj.name = e.target.value;
}, false);