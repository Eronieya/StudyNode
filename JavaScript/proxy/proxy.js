const handler = {
    getPrototypeOf() {
        console.log('CATCH [getPrototypeOf]');
    },
    get: function(obj, prop, receiver) {
        return prop in obj ? obj[prop] : 37;
    },
    set: function(obj, prop, value, receiver) {
        console.log(obj, prop, value, receiver);
    },
    delete: function(obj, prop) {
        
    }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);      // 1, undefined
console.log('c' in p, p.c); // false, 37