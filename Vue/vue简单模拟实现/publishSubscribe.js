// 订阅者
function Subscriber(node, vm, name) {
    Publisher.global = this;
    this.node = node;
    this.vm = vm;
    this.name = name;

    this.update();
    publisher.global = null;
}
Subscriber.prototype = {
    constructor: Subscriber,
    update: function () {
        let vm = this.vm;
        let node = this.node;
        let name = this.name;
        switch (this.node.nodeType) {
            case 1:
                node.value = vm[name];
                break;
            case 3:
                node.nodeValue = vm[name];
                break;
            default:
                break;
        }
    }
}

// 发布者
function Publisher() {
    this.subs = []; // 添加订阅者
}
Publisher.prototype = {
    constructor: Publisher,
    add: function (sub) {
        this.subs.push(sub); // 添加订阅者
    },
    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update(); // 发布订阅
        })
    }
};

// 中间件
var publisher = new Publisher();
var middleware = {
    publish: function () {
        publisher.notify();
    }
};
middleware.publish();