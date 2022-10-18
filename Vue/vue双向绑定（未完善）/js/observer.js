let data = {
  name: 'jarl zhang'
};
observe(data);
data.name = 'change name';
console.log('data.name', data.name)

function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }

  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key]);
  });
}

function defineReactive(obj, key, val) {
  var dep = new Dep();
  observe(val);

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: false,
    get: () => {
      return val;
    },
    set: (newVal) => {
      console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
      val = newVal;
      dep.notify();
    }
  })
}

class Dep {
  constructor() {
    this.sub = [];
  }

  addSub(sub) {
    this.sub.push(sub);
  }

  notify() {
    this.sub.forEach(sub => {
      sub.update();
    })
  }
}